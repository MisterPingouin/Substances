<?php
namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Mailer\MailerInterface;
use Symfony\Component\Mime\Email;

class EmailTestController extends AbstractController
{
    #[Route('/api/email-test', name: 'email_test')]
    public function sendEmail(MailerInterface $mailer): Response
    {
        $email = (new Email())
            ->from('contact@agence-substances.com')
            ->to('juliacharlotte@agence-substances.com')
            ->subject('Test Email from Symfony')
            ->text('If you are reading this, the email sending is working!');

        $mailer->send($email);

        return new Response('Email sent!');
    }
}
