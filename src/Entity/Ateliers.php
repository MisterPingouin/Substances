<?php

namespace App\Entity;

use App\Repository\AteliersRepository;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: AteliersRepository::class)]
class Ateliers
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $lien = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $image = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $titre = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $sousDescription = null;

    #[ORM\Column(type: Types::TEXT, nullable: true)]
    private ?string $description = null;

    #[ORM\Column(type: Types::TEXT, nullable: true)]
    private ?string $descriptionGras = null;

    #[ORM\Column(type: Types::TEXT, nullable: true)]
    private ?string $description2 = null;

    #[ORM\Column(type: Types::TEXT, nullable: true)]
    private ?string $description3 = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $imageCaroussel = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getLien(): ?string
    {
        return $this->lien;
    }

    public function setLien(?string $lien): static
    {
        $this->lien = $lien;

        return $this;
    }

    public function getImage(): ?string
    {
        return $this->image;
    }

    public function setImage(?string $image): static
    {
        $this->image = $image;

        return $this;
    }

    public function getTitre(): ?string
    {
        return $this->titre;
    }

    public function setTitre(?string $titre): static
    {
        $this->titre = $titre;

        return $this;
    }

    public function getSousDescription(): ?string
    {
        return $this->sousDescription;
    }

    public function setSousDescription(?string $sousDescription): static
    {
        $this->sousDescription = $sousDescription;

        return $this;
    }

    public function getDescription(): ?string
    {
        return $this->description;
    }

    public function setDescription(?string $description): static
    {
        $this->description = $description;

        return $this;
    }

    public function getDescriptionGras(): ?string
    {
        return $this->descriptionGras;
    }

    public function setDescriptionGras(?string $descriptionGras): static
    {
        $this->descriptionGras = $descriptionGras;

        return $this;
    }

    public function getDescription2(): ?string
    {
        return $this->description2;
    }

    public function setDescription2(?string $description2): static
    {
        $this->description2 = $description2;

        return $this;
    }

    public function getDescription3(): ?string
    {
        return $this->description3;
    }

    public function setDescription3(?string $description3): static
    {
        $this->description3 = $description3;

        return $this;
    }

    public function getImageCaroussel(): ?string
    {
        return $this->imageCaroussel;
    }

    public function setImageCaroussel(?string $imageCaroussel): static
    {
        $this->imageCaroussel = $imageCaroussel;

        return $this;
    }
}
