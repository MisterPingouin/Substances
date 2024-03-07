<?php
namespace App\Controller;

use App\Entity\About;
use App\Repository\AboutRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

#[Route('/api/about')]
class AboutController extends AbstractController
{

    #[Route('/', name: 'about_get', methods: ['GET'])]
    public function get(AboutRepository $aboutRepository): Response
    {
        $about = $aboutRepository->find(1);

        if (!$about) {
            return $this->json(['message' => 'About content not found'], Response::HTTP_NOT_FOUND);
        }

        return $this->json($about);
    }

    #[Route('/update/{id}', name: 'about_update', methods: ['POST'])]
    public function update(Request $request, About $about, EntityManagerInterface $entityManager): Response
    {
        if (!$about) {
            return $this->json(['message' => 'About content not found'], Response::HTTP_NOT_FOUND);
        }

        $about->setSubtitle($request->request->get('subtitle', $about->getSubtitle()));
        $about->setBloc1($request->request->get('bloc1', $about->getBloc1()));
        $about->setBloc2($request->request->get('bloc2', $about->getBloc2()));
        $about->setBloc3($request->request->get('bloc3', $about->getBloc3()));
        $about->setBloc4($request->request->get('bloc4', $about->getBloc4()));

        $entityManager->flush();

        return $this->json([
            'id' => $about->getId(),
            'subtitle' => $about->getSubtitle(),
            'bloc1' => $about->getBloc1(),
            'bloc2' => $about->getBloc2(),
            'bloc3' => $about->getBloc3(),
            'bloc4' => $about->getBloc4()
        ]);
    }
}
