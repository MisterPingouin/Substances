<?php

namespace App\Entity;

use App\Repository\AboutRepository;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: AboutRepository::class)]
class About
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(type: Types::TEXT, nullable: true)]
    private ?string $subtitle = null;

    #[ORM\Column(type: Types::TEXT, nullable: true)]
    private ?string $bloc1 = null;

    #[ORM\Column(type: Types::TEXT, nullable: true)]
    private ?string $bloc2 = null;

    #[ORM\Column(type: Types::TEXT, nullable: true)]
    private ?string $bloc3 = null;

    #[ORM\Column(type: Types::TEXT, nullable: true)]
    private ?string $bloc4 = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getSubtitle(): ?string
    {
        return $this->subtitle;
    }

    public function setSubtitle(?string $subtitle): static
    {
        $this->subtitle = $subtitle;

        return $this;
    }

    public function getBloc1(): ?string
    {
        return $this->bloc1;
    }

    public function setBloc1(?string $bloc1): static
    {
        $this->bloc1 = $bloc1;

        return $this;
    }

    public function getBloc2(): ?string
    {
        return $this->bloc2;
    }

    public function setBloc2(?string $bloc2): static
    {
        $this->bloc2 = $bloc2;

        return $this;
    }

    public function getBloc3(): ?string
    {
        return $this->bloc3;
    }

    public function setBloc3(?string $bloc3): static
    {
        $this->bloc3 = $bloc3;

        return $this;
    }

    public function getBloc4(): ?string
    {
        return $this->bloc4;
    }

    public function setBloc4(?string $bloc4): static
    {
        $this->bloc4 = $bloc4;

        return $this;
    }
}
