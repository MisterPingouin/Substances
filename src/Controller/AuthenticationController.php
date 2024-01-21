<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Http\Authentication\AuthenticationUtils;

class AuthenticationController extends AbstractController
{
    #[Route('/login', name: 'app_login', methods: ['POST'])]
    public function login(Request $request, AuthenticationUtils $authenticationUtils): Response
    {
        // Récupérez l'erreur de connexion s'il y en a une
        $error = $authenticationUtils->getLastAuthenticationError();

        // Récupérez le dernier nom d'utilisateur saisi
        $lastUsername = $authenticationUtils->getLastUsername();

        // Si une erreur d'authentification est présente, renvoyez une réponse avec l'erreur
        if ($error) {
            return $this->json([
                'message' => 'Authentication failed',
                'error' => $error->getMessage(),
            ], Response::HTTP_UNAUTHORIZED);
        }

        // Si aucun erreur, la réponse sera gérée par votre Authenticator
        // Vous pouvez ajouter d'autres logiques ici si nécessaire

        // Normalement, cette partie du code ne devrait pas être atteinte si l'authentification réussit
        // car l'authentificateur interviendra avant. 
        return $this->json([
            'message' => 'Authentication successful',
            'username' => $lastUsername,
        ]);
    }

    #[Route('/logout', name: 'app_logout', methods: ['GET'])]
    public function logout()
    {
        // Cette méthode peut rester vide, car Symfony gère la déconnexion automatiquement
        throw new \Exception('This should never be reached!');
    }
}
