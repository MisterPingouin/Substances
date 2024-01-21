<?php

namespace App\Security;

use App\Entity\User;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Security\Core\Authentication\Token\TokenInterface;
use Symfony\Component\Security\Core\Exception\AuthenticationException;
use Symfony\Component\Security\Core\Exception\CustomUserMessageAuthenticationException;
use Symfony\Component\Security\Http\Authenticator\AbstractAuthenticator;
use Symfony\Component\Security\Http\Authenticator\Passport\Badge\UserBadge;
use Symfony\Component\Security\Http\Authenticator\Passport\Credentials\PasswordCredentials;
use Symfony\Component\Security\Http\Authenticator\Passport\Passport;
use Lexik\Bundle\JWTAuthenticationBundle\Services\JWTTokenManagerInterface;

class Authenticator extends AbstractAuthenticator
{
    private $entityManager;
    private $jwtTokenManager;

    public function __construct(EntityManagerInterface $entityManager, JWTTokenManagerInterface $jwtTokenManager)
    {
        $this->entityManager = $entityManager;
        $this->jwtTokenManager = $jwtTokenManager;
    }

    public function supports(Request $request): ?bool
    {
        return $request->getPathInfo() == '/login' && $request->isMethod('POST');
    }

    public function authenticate(Request $request): Passport
    {
        $data = json_decode($request->getContent(), true);
        $username = $data['username'] ?? '';

        return new Passport(
            new UserBadge($username, function ($username) {
                $user = $this->entityManager->getRepository(User::class)->findOneBy(['username' => $username]);
                if (!$user) {
                    throw new CustomUserMessageAuthenticationException('Username could not be found.');
                }
                return $user;
            }),
            new PasswordCredentials($data['password'] ?? ''),
            [
            ]
        );
    }

    public function onAuthenticationSuccess(Request $request, TokenInterface $token, string $firewallName): ?Response
    {
        $user = $token->getUser();
        $jwt = $this->jwtTokenManager->create($user);

        return new JsonResponse(['token' => $jwt]);
    }

    public function onAuthenticationFailure(Request $request, AuthenticationException $exception): ?Response
    {
        $data = [
            'message' => strtr($exception->getMessageKey(), $exception->getMessageData())
        ];

        return new JsonResponse($data, Response::HTTP_UNAUTHORIZED);
    }

}
