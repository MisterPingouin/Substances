<?php
namespace App\Controller;

use App\Entity\LogoCompany;
use App\Repository\LogoCompanyRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\File\Exception\FileException;

#[Route('/api/logo-company')]
class LogoCompanyController extends AbstractController
{
    #[Route('/list', name: 'logo_company_list', methods: ['GET'])]
    public function list(LogoCompanyRepository $logoCompanyRepository): Response
    {
        $logos = $logoCompanyRepository->findAll();
        return $this->json($logos);
    }

    #[Route('/add', name: 'logo_company_create', methods: ['POST'])]
    public function create(Request $request, EntityManagerInterface $entityManager): Response
    {
        $logoCompany = new LogoCompany();
        $this->handleFileUpload($logoCompany, $request, 'logo');
        $entityManager->persist($logoCompany);
        $entityManager->flush();

        return $this->json($logoCompany, Response::HTTP_CREATED);
    }

    #[Route('/update/{id}', name: 'logo_company_update', methods: ['POST'])]
    public function update(Request $request, LogoCompany $logoCompany, EntityManagerInterface $entityManager): Response
    {
        if (!$logoCompany) {
            return $this->json(['message' => 'Logo not found'], Response::HTTP_NOT_FOUND);
        }

        $this->handleFileUpload($logoCompany, $request, 'logo');
        $entityManager->flush();

        return $this->json($logoCompany);
    }

    #[Route('/delete/{id}', name: 'logo_company_delete', methods: ['DELETE'])]
    public function delete(LogoCompany $logoCompany, EntityManagerInterface $entityManager): Response
    {
        $entityManager->remove($logoCompany);
        $entityManager->flush();
        return $this->json(null, Response::HTTP_NO_CONTENT);
    }

    private function handleFileUpload(LogoCompany $logoCompany, Request $request, $fieldName): void
    {
        if ($request->files->has($fieldName)) {
            $file = $request->files->get($fieldName);
            $fileName = $this->generateUniqueFileName().'.'.$file->guessExtension();

            try {
                $file->move($this->getParameter('logos_directory'), $fileName);
                $logoCompany->setLogoPath('/logos/'.$fileName);
            } catch (FileException $e) {
            }
        }
    }

    private function generateUniqueFileName(): string
    {
        return md5(uniqid());
    }
}
