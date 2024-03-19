<?php

namespace App\Controller;

use Symfony\Component\HttpFoundation\Response;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class SitemapController extends AbstractController
{
    #[Route('/sitemap.xml', name: 'app_sitemap', defaults: ['_format' => 'xml'])]
    public function index(): Response
    {
        $hostname = $this->getParameter('app.hostname');

        $xml = '<?xml version="1.0" encoding="UTF-8"?>';
        $xml .= '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">';

        $urls = [
            ['loc' => '/', 'priority' => '1.0', 'changefreq' => 'daily'],
            ['loc' => '/about', 'priority' => '0.9', 'changefreq' => 'monthly'],
            ['loc' => '/atelier', 'priority' => '0.8', 'changefreq' => 'monthly'],
            ['loc' => '/conseil', 'priority' => '0.8', 'changefreq' => 'monthly'],
            ['loc' => '/formation', 'priority' => '0.8', 'changefreq' => 'monthly'],
            ['loc' => '/contact', 'priority' => '0.7', 'changefreq' => 'monthly'],
            ['loc' => '/mention', 'priority' => '0.2', 'changefreq' => 'yearly'],
            ['loc' => '/plan', 'priority' => '0.2', 'changefreq' => 'yearly'],
        ];

        foreach ($urls as $url) {
            $xml .= '<url>';
            $xml .= '<loc>' . htmlspecialchars($hostname . $url['loc']) . '</loc>';
            $xml .= '<changefreq>' . $url['changefreq'] . '</changefreq>';
            $xml .= '<priority>' . $url['priority'] . '</priority>';
            $xml .= '</url>';
        }

        $xml .= '</urlset>';

        return new Response($xml, Response::HTTP_OK, ['Content-Type' => 'application/xml']);
    }
}
