<?php

namespace App\Controller;

use App\Entity\Formations;
use App\Repository\FormationsRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\File\Exception\FileException;

#[Route('/api/formations')]
class FormationController extends AbstractController
{
    #[Route('/list', name: 'formations_list', methods: ['GET'])]
    public function list(FormationsRepository $formationsRepository): Response
    {
        $formations = $formationsRepository->findAll();
        return $this->json($formations);
    }

    #[Route('/add', name: 'formations_create', methods: ['POST'])]
    public function create(Request $request, EntityManagerInterface $entityManager): Response
    {
        $formation = new Formations();
        $this->updateFormationDataFromRequest($formation, $request);
        $entityManager->persist($formation);
        $entityManager->flush();
        return $this->json($formation, Response::HTTP_CREATED);
    }

    #[Route('/update/{id}', name: 'formations_update', methods: ['POST'])] 
    public function update(Request $request, Formations $formation, EntityManagerInterface $entityManager): Response
    {
        if (!$formation) {
            return $this->json(['message' => 'formation not found'], Response::HTTP_NOT_FOUND);
        }

        $this->updateFormationDataFromRequest($formation, $request);
        $entityManager->flush();

        return $this->json($formation);
    }
    

    #[Route('/delete/{id}', name: 'formations_delete', methods: ['DELETE'])]
    public function delete(Formations $formation, EntityManagerInterface $entityManager): Response
    {
        $entityManager->remove($formation);
        $entityManager->flush();
        return $this->json(null, Response::HTTP_NO_CONTENT);
    }

    private function updateFormationDataFromRequest(Formations $formation, Request $request): void
{
    $fieldsToUpdate = ['lien', 'titre', 'sousDescription', 'description', 'description2', 'logoDescription'];

    foreach ($fieldsToUpdate as $field) {
        if ($request->request->has($field)) {
            $value = $request->request->get($field);
            $setterMethod = 'set'.ucfirst($field);
            $formation->$setterMethod($value);
        }
    }

    $this->handleFileUpload($formation, $request, 'image');
    $this->handleFileUpload($formation, $request, 'logoUrl');
}


    private function handleFileUpload(Formations $formation, Request $request, $fieldName): void
    {
        if ($request->files->has($fieldName)) {
            $file = $request->files->get($fieldName);
            $fileName = $this->generateUniqueFileName().'.'.$file->guessExtension();

            try {
                $file->move($this->getParameter('uploads_directory'), $fileName);
                $setterMethod = 'set'.ucfirst($fieldName);
                if (method_exists($formation, $setterMethod)) {
                    $formation->$setterMethod('/uploads/'.$fileName);
                }
            } catch (FileException $e) {
                // Handle the exception if the file could not be moved
            }
        }
    }

    private function generateUniqueFileName(): string
    {
        return md5(uniqid());
    }

    #[Route('/deleteImage/{id}', name: 'formations_delete_image', methods: ['DELETE'])]
    public function deleteImage(Formations $formation, EntityManagerInterface $entityManager): Response
    {
        if (!$formation) {
            return $this->json(['message' => 'Formation not found'], Response::HTTP_NOT_FOUND);
        }
    
        $imagePath = $formation->getImage(); 
        if ($imagePath) {
            $absolutePath = $this->getParameter('kernel.project_dir') . '/public' . $imagePath;
            if (file_exists($absolutePath)) {
                unlink($absolutePath);
            }
    
            $formation->setImage(null);
            $entityManager->flush();
        }
    
        return $this->json(['message' => 'Image deleted successfully']);
    }
    
}
