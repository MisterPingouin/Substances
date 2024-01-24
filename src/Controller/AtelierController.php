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

    private function updateAtelierDataFromRequest(Ateliers $atelier, Request $request): void
    {
        $fieldsToUpdate = ['lien', 'titre', 'sousDescription', 'description', 'descriptionGras', 'description2', 'description3', 'imageCaroussel'];

        foreach ($fieldsToUpdate as $field) {
            if ($request->request->has($field)) {
                $value = $request->request->get($field);
                $setterMethod = 'set'.ucfirst($field);
                $atelier->$setterMethod($value);
            }
        }

        $this->handleFileUpload($atelier, $request, 'image');
    }

    private function handleFileUpload(Ateliers $atelier, Request $request, $fieldName): void {
        if ($request->files->has($fieldName)) {
            $files = $request->files->get($fieldName);
            $fileNames = [];
    
            if (!is_array($files)) {
                $files = [$files]; // Assurez-vous que $files est toujours un tableau
            }
    
            foreach ($files as $file) {
                $fileName = $this->generateUniqueFileName().'.'.$file->guessExtension();
    
                try {
                    $file->move($this->getParameter('uploads_directory'), $fileName);
                    $fileNames[] = '/uploads/'.$fileName;
                } catch (FileException $e) {
                    // Gérer l'exception si le fichier ne peut pas être déplacé
                }
            }
    
            if ($fieldName === 'imageCaroussel') {
                $atelier->setImageCaroussel($fileNames);
            } else {
                $atelier->{'set'.ucfirst($fieldName)}($fileNames[0] ?? null);
            }
        }
    }
    


    private function generateUniqueFileName(): string
    {
        return md5(uniqid());
    }
}
