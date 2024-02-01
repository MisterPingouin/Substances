<?php

namespace App\Repository;

use App\Entity\LogoCompany;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<LogoCompany>
 *
 * @method LogoCompany|null find($id, $lockMode = null, $lockVersion = null)
 * @method LogoCompany|null findOneBy(array $criteria, array $orderBy = null)
 * @method LogoCompany[]    findAll()
 * @method LogoCompany[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class LogoCompanyRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, LogoCompany::class);
    }

//    /**
//     * @return LogoCompany[] Returns an array of LogoCompany objects
//     */
//    public function findByExampleField($value): array
//    {
//        return $this->createQueryBuilder('l')
//            ->andWhere('l.exampleField = :val')
//            ->setParameter('val', $value)
//            ->orderBy('l.id', 'ASC')
//            ->setMaxResults(10)
//            ->getQuery()
//            ->getResult()
//        ;
//    }

//    public function findOneBySomeField($value): ?LogoCompany
//    {
//        return $this->createQueryBuilder('l')
//            ->andWhere('l.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
