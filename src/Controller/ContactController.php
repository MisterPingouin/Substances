<?php 
namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Mailer\MailerInterface;
use Symfony\Component\Mime\Email;
use Symfony\Component\Validator\Constraints as Assert;
use Symfony\Component\Validator\Validator\ValidatorInterface;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;

class ContactController extends AbstractController
{
    #[Route('/api/send-email', name: 'contact_send_email', methods: ['POST'])]
    public function sendEmail(Request $request, MailerInterface $mailer, ValidatorInterface $validator): Response
    {
        $data = json_decode($request->getContent(), true);

        $constraints = new Assert\Collection([
            'nom' => [new Assert\NotBlank(), new Assert\Length(['min' => 2])],
            'prenom' => [new Assert\NotBlank(), new Assert\Length(['min' => 2])],
            'telephone' => new Assert\Optional([
                new Assert\Regex([
                    'pattern' => '/^\+?[0-9]{3}-?[0-9]{6,12}$/',
                    'message' => 'Veuillez fournir un numéro de téléphone valide.',
                ])
            ]),
            'email' => [new Assert\NotBlank(), new Assert\Email()],
            'societe' => [new Assert\Optional(), new Assert\Length(['min' => 2])],
            'objetDemande' => [new Assert\NotBlank()],
            'message' => [new Assert\NotBlank(), new Assert\Length(['min' => 10])],
        ]);

        $errors = $validator->validate($data, $constraints);

        if (count($errors) > 0) {
            $errorsString = (string) $errors;

            return new JsonResponse(['errors' => $errorsString], Response::HTTP_BAD_REQUEST);
        }

        $email = (new Email())
            ->from('juliacharlotte@agence-substances.com')
            ->to('juliacharlotte@agence-substances.com')
            ->subject('Nouveau message de contact')
            ->text('Nom: '.$data['nom']."\n".
                   'Prénom: '.$data['prenom']."\n".
                   'Téléphone: '.($data['telephone'] ?? 'Non fourni')."\n".
                   'Email: '.$data['email']."\n".
                   'Société: '.$data['societe']."\n".
                   'Objet de la demande: '.$data['objetDemande']."\n".
                   'Message: '.$data['message']);

        $mailer->send($email);

        return new JsonResponse('Message envoyé avec succès', Response::HTTP_OK);
    }
}
