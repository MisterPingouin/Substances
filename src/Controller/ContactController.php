<?php
namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Mailer\MailerInterface;
use Symfony\Component\Mime\Email;
use Symfony\Component\Validator\Validator\ValidatorInterface;

class ContactController extends AbstractController
{
    public function sendEmail(Request $request, MailerInterface $mailer, ValidatorInterface $validator): Response
    {
        $data = json_decode($request->getContent(), true);

        // Validation des données
        // Ajoutez vos contraintes de validation ici

        $errors = $validator->validate($data);

        if (count($errors) > 0) {
            return $this->json($errors, Response::HTTP_BAD_REQUEST);
        }

        $email = (new Email())
            ->from('votre-email@example.com')
            ->to('destinataire@example.com')
            ->subject('Nouveau message de contact')
            ->text('Nom: '.$data['nom']."\n".
                   'Prénom: '.$data['prenom']."\n".
                   'Téléphone: '.$data['telephone']."\n".
                   'Email: '.$data['email']."\n".
                   'Société: '.$data['societe']."\n".
                   'Objet de la demande: '.$data['objetDemande']."\n".
                   'Message: '.$data['message']);

        $mailer->send($email);

        return new Response('Message envoyé avec succès', Response::HTTP_OK);
    }
}
