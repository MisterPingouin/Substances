<?php

namespace App\Controller;

use App\Entity\Certification;
use App\Repository\CertificationRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\File\Exception\FileException;

#[Route('/api/certification')]
class CertificationController extends AbstractController
{
    #[Route('/list', name: 'certification_list', methods: ['GET'])]
    public function list(CertificationRepository $certificationRepository): Response
    {
        $certifications = $certificationRepository->findAll();
        return $this->json($certifications);
    }

    #[Route('/add', name: 'certification_create', methods: ['POST'])]
    public function create(Request $request, EntityManagerInterface $entityManager): Response
    {
        $certification = new Certification();
        $this->handleFileUpload($certification, $request, 'logo');
        $entityManager->persist($certification);
        $entityManager->flush();

        return $this->json($certification, Response::HTTP_CREATED);
    }

    #[Route('/update/{id}', name: 'certification_update', methods: ['POST'])]
    public function update(Request $request, Certification $certification, EntityManagerInterface $entityManager): Response
    {
        if (!$certification) {
            return $this->json(['message' => 'Certification not found'], Response::HTTP_NOT_FOUND);
        }

        $this->handleFileUpload($certification, $request, 'logo');
        $entityManager->flush();

        return $this->json($certification);
    }

    #[Route('/delete/{id}', name: 'certification_delete', methods: ['DELETE'])]
    public function delete(Certification $certification, EntityManagerInterface $entityManager): Response
    {
        $entityManager->remove($certification);
        $entityManager->flush();
        return $this->json(null, Response::HTTP_NO_CONTENT);
    }

    private function handleFileUpload(Certification $certification, Request $request, $fieldName): void
    {
        if ($request->files->has($fieldName)) {
            $file = $request->files->get($fieldName);
            $fileName = $this->generateUniqueFileName().'.'.$file->guessExtension();

            try {
                $file->move($this->getParameter('logos_directory'), $fileName);
                $certification->setLogo('/logos/'.$fileName);
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
