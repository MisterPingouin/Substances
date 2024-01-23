<?php

namespace App\Controller;

use App\Entity\Conseils;
use App\Repository\ConseilsRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\File\Exception\FileException;

#[Route('/api/conseils')]
class ConseilController extends AbstractController
{
    #[Route('/list', name: 'conseils_list', methods: ['GET'])]
    public function list(ConseilsRepository $conseilsRepository): Response
    {
        $conseils = $conseilsRepository->findAll();
        return $this->json($conseils);
    }

    #[Route('/add', name: 'conseils_create', methods: ['POST'])]
    public function create(Request $request, EntityManagerInterface $entityManager): Response
    {
        $conseil = new Conseils();
        $this->updateConseilDataFromRequest($conseil, $request);
        $entityManager->persist($conseil);
        $entityManager->flush();
        return $this->json($conseil, Response::HTTP_CREATED);
    }

    #[Route('/update/{id}', name: 'conseils_update', methods: ['POST'])] 
    public function update(Request $request, Conseils $conseil, EntityManagerInterface $entityManager): Response
    {
        if (!$conseil) {
            return $this->json(['message' => 'Conseil not found'], Response::HTTP_NOT_FOUND);
        }

        $this->updateConseilDataFromRequest($conseil, $request);
        $entityManager->flush();

        return $this->json($conseil);
    }
    

    #[Route('/delete/{id}', name: 'conseils_delete', methods: ['DELETE'])]
    public function delete(Conseils $conseil, EntityManagerInterface $entityManager): Response
    {
        $entityManager->remove($conseil);
        $entityManager->flush();
        return $this->json(null, Response::HTTP_NO_CONTENT);
    }

    private function updateConseilDataFromRequest(Conseils $conseil, Request $request): void
{
    $fieldsToUpdate = ['lien', 'titre', 'sousDescription', 'description', 'description2', 'logoDescription'];

    foreach ($fieldsToUpdate as $field) {
        if ($request->request->has($field)) {
            $value = $request->request->get($field);
            $setterMethod = 'set'.ucfirst($field);
            $conseil->$setterMethod($value);
        }
    }

    $this->handleFileUpload($conseil, $request, 'image');
    $this->handleFileUpload($conseil, $request, 'logoUrl');
}


    private function handleFileUpload(Conseils $conseil, Request $request, $fieldName): void
    {
        if ($request->files->has($fieldName)) {
            $file = $request->files->get($fieldName);
            $fileName = $this->generateUniqueFileName().'.'.$file->guessExtension();

            try {
                $file->move($this->getParameter('uploads_directory'), $fileName);
                $setterMethod = 'set'.ucfirst($fieldName);
                if (method_exists($conseil, $setterMethod)) {
                    $conseil->$setterMethod('/uploads/'.$fileName);
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
}
