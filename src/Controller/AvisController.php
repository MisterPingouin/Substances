<?php
namespace App\Controller;

use App\Entity\Avis;
use App\Repository\AvisRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

#[Route('/api/avis')]
class AvisController extends AbstractController
{
    #[Route('/list', name: 'avis_list', methods: ['GET'])]
    public function list(AvisRepository $avisRepository): Response
    {
        $avis = $avisRepository->findAll();
        return $this->json($avis);
    }

    #[Route('/add', name: 'avis_create', methods: ['POST'])]
    public function create(Request $request, EntityManagerInterface $entityManager): Response
    {
        $avis = new Avis();
        $content = $request->request->get('content');
        $name = $request->request->get('name');
        $fonction = $request->request->get('fonction');
        $company = $request->request->get('company');

        $avis->setContent($content);
        $avis->setName($name);
        $avis->setFonction($fonction);
        $avis->setCompany($company);

        $entityManager->persist($avis);
        $entityManager->flush();

        return $this->json($avis, Response::HTTP_CREATED);
    }

    #[Route('/update/{id}', name: 'avis_update', methods: ['POST'])]
    public function update(Request $request, Avis $avis, EntityManagerInterface $entityManager): Response
    {
        if (!$avis) {
            return $this->json(['message' => 'Avis not found'], Response::HTTP_NOT_FOUND);
        }

        $avis->setContent($request->request->get('content'));
        $avis->setName($request->request->get('name'));
        $avis->setFonction($request->request->get('fonction'));
        $avis->setCompany($request->request->get('company'));

        $entityManager->flush();

        return $this->json($avis);
    }

    #[Route('/delete/{id}', name: 'avis_delete', methods: ['DELETE'])]
    public function delete(Avis $avis, EntityManagerInterface $entityManager): Response
    {
        if (!$avis) {
            return $this->json(['message' => 'Avis not found'], Response::HTTP_NOT_FOUND);
        }

        $entityManager->remove($avis);
        $entityManager->flush();
        return $this->json(null, Response::HTTP_NO_CONTENT);
    }
}
