<?php

namespace App\Controller;

use App\Entity\Ateliers;
use App\Repository\AteliersRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\File\Exception\FileException;
use Symfony\Component\HttpFoundation\File\UploadedFile;

#[Route('/api/ateliers')]
class AtelierController extends AbstractController
{
    #[Route('/list', name: 'ateliers_list', methods: ['GET'])]
    public function list(AteliersRepository $ateliersRepository): Response
    {
        $ateliers = $ateliersRepository->findAll();
        return $this->json($ateliers);
    }

    #[Route('/add', name: 'ateliers_create', methods: ['POST'])]
    public function create(Request $request, EntityManagerInterface $entityManager): Response
    {
        $atelier = new Ateliers();
        $this->updateAtelierDataFromRequest($atelier, $request);
        $entityManager->persist($atelier);
        $entityManager->flush();
        return $this->json($atelier, Response::HTTP_CREATED);
    }

    #[Route('/update/{id}', name: 'ateliers_update', methods: ['POST'])] 
    public function update(Request $request, Ateliers $atelier, EntityManagerInterface $entityManager): Response
    {
        if (!$atelier) {
            return $this->json(['message' => 'Atelier not found'], Response::HTTP_NOT_FOUND);
        }

        $this->updateAtelierDataFromRequest($atelier, $request);
        $entityManager->flush();

        return $this->json($atelier);
    }
    

    #[Route('/delete/{id}', name: 'ateliers_delete', methods: ['DELETE'])]
    public function delete(Ateliers $atelier, EntityManagerInterface $entityManager): Response
    {
        $entityManager->remove($atelier);
        $entityManager->flush();
        return $this->json(null, Response::HTTP_NO_CONTENT);
    }

    #[Route('/remove-carousel-image/{id}', name: 'ateliers_remove_carousel_image', methods: ['POST'])]
public function removeCarouselImage(Request $request, Ateliers $atelier, EntityManagerInterface $entityManager): Response
{
    // Récupérer l'index de l'image à supprimer du carrousel
    $imageIndex = $request->request->get('imageIndex');

    // Supprimer l'image du tableau
    $images = $atelier->getImageCaroussel();
    if (isset($images[$imageIndex])) {
        unset($images[$imageIndex]);
        $atelier->setImageCaroussel(array_values($images)); // Réindexer le tableau
        $entityManager->flush();
    }

    return $this->json($atelier);
}


    private function updateAtelierDataFromRequest(Ateliers $atelier, Request $request): void
    {
        $fieldsToUpdate = ['lien', 'titre', 'sousDescription', 'description', 'descriptionGras', 'description2', 'description3', 'imageCaroussel'];

        foreach ($fieldsToUpdate as $field) {
            if ($request->request->has($field)) {
                $value = $request->request->get($field);
                if ($field === 'imageCaroussel' && !empty($value)) {
                    // Décoder la chaîne JSON en tableau si nécessaire
                    $value = is_string($value) ? json_decode($value, true) : $value;
                }
                $setterMethod = 'set'.ucfirst($field);
                $atelier->$setterMethod($value);
            }
        }

        $this->handleFileUpload($atelier, $request, 'image');
    }

    private function handleFileUpload(Ateliers $atelier, Request $request): void
    {
        // Gérer l'upload de l'image principale
        $this->uploadSingleFile($atelier, $request, 'image');

        // Gérer l'upload des images du carrousel
        $this->uploadMultipleFiles($atelier, $request, 'imageCaroussel');
    }

    private function uploadSingleFile(Ateliers $atelier, Request $request, string $fieldName): void
    {
        if ($request->files->has($fieldName)) {
            $file = $request->files->get($fieldName);
            if ($file instanceof UploadedFile && $file->isValid()) {
                $fileName = $this->generateUniqueFileName().'.'.$file->guessExtension();
                try {
                    $file->move($this->getParameter('uploads_directory'), $fileName);
                    $atelier->{'set'.ucfirst($fieldName)}('/uploads/'.$fileName);
                } catch (FileException $e) {
                    // Gérer l'exception
                }
            }
        }
    }
    
    private function uploadMultipleFiles(Ateliers $atelier, Request $request, string $fieldName): void
{
    if ($request->files->has($fieldName)) {
        $files = $request->files->get($fieldName);
        if (!is_array($files)) {
            $files = [$files];
        }

        $fileNames = $atelier->getImageCaroussel(); // Récupérer les URLs existants

        foreach ($files as $file) {
            if ($file instanceof UploadedFile) {
                $fileName = $this->generateUniqueFileName().'.'.$file->guessExtension();
                try {
                    $file->move($this->getParameter('uploads_directory'), $fileName);
                    $fileNames[] = '/uploads/'.$fileName;
                } catch (FileException $e) {
                    // Gérer l'exception
                }
            }
        }

        $atelier->setImageCaroussel($fileNames);
    } elseif ($request->request->has($fieldName)) {
        // Gérer les URLs existants (pas de nouveaux fichiers)
        $atelier->setImageCaroussel(json_decode($request->request->get($fieldName), true));
    }
}

#[Route('/add-carousel-image/{id}', name: 'ateliers_add_carousel_image', methods: ['POST'])]
public function addCarouselImage(Request $request, Ateliers $atelier, EntityManagerInterface $entityManager): Response
{
    if (!$atelier) {
        return $this->json(['message' => 'Atelier not found'], Response::HTTP_NOT_FOUND);
    }

    $images = $atelier->getImageCaroussel() ?? [];

    $files = $request->files->get('imageCaroussel');
    if ($files) {
        foreach ($files as $file) {
            if ($file->isValid()) {
                $fileName = $this->generateUniqueFileName().'.'.$file->guessExtension();
                try {
                    $file->move($this->getParameter('uploads_directory'), $fileName);
                    $images[] = '/uploads/'.$fileName;
                } catch (FileException $e) {
                    return $this->json(['message' => 'Failed to upload image'], Response::HTTP_INTERNAL_SERVER_ERROR);
                }
            }
        }
    }

    $atelier->setImageCaroussel($images);
    $entityManager->flush();

    return $this->json($atelier);
}
    
    


    private function generateUniqueFileName(): string
    {
        return md5(uniqid());
    }
}
