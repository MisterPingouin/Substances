import React from "react";
import Header from "../components/nav/Header";
import Footer from "../components/Footer";
import Logo from "../components/Logo";

const Mention = () => {
  return (
    <>
      <Header />
      <main className="min-h-[calc(100vh-597px)]">
        <div className="flex flex-col justify-center items-start relative">
          <div className="text-7xl text-colorbrown pt-20 mx-auto w-[85%] pr-14 font-bold lg:w-[80%]">
            <h1 className="block">Mention légales</h1>
          </div>
          <div className="text-colorbrown mt-12 border-t border-black w-[85%] mb-8 mx-auto relative z-10 lg:hidden"></div>
          <div className="hidden lg:flex justify-center items-center relative z-10">
        <div className="text-colorbrown border-t w-[80%] mt-14 border-black "></div>
      </div>
          <div className="flex text-2xl flex-col w-[85%] lg:w-[79%] justify-center mx-auto space-y-4 z-20">
            <h4 className="mt-2">En vigueur au 12/03/2024</h4>
            <p>
              Conformément aux dispositions des Articles 6-III et 19 de la Loi
              n°2004-575 du 21 juin 2004 pour la Confiance dans l’économie
              numérique, dite L.C.E.N., il est porté à la connaissance des
              utilisateurs et visiteurs, ci-après l'"Utilisateur", du site
              www.agence-substances.com, ci-après le "Site", les présentes
              mentions légales.
            </p>
            <p>
              La connexion et la navigation sur le Site par l’Utilisateur
              impliquent acceptation intégrale et sans réserve des présentes
              mentions légales, également désignées par l'acronyme CGU pour
              "Conditions Générales de l'Utilisateur".
            </p>
            <p>
              Ces dernières sont accessibles sur le Site à la rubrique «
              Mentions légales ».
            </p>
            <h3 className="font-bold pt-4">ARTICLE 1 - L'ÉDITEUR</h3>
            <p>
              L’édition et la direction de la publication du Site sont assurées
              par Julia-Charlotte Basso, domiciliée 23 Rue Chevreul, 69007 Lyon,
              dont le numéro de téléphone est 0647216500, et l'adresse e-mail
              juliacharlotte@agence-substances.com, ci-après l'"Éditeur".
            </p>
            <h3 className="font-bold pt-4">ARTICLE 2 - L'HÉBERGEUR</h3>
            <p>
              L'hébergeur du Site est la société O2SWITCH, dont le siège social
              est situé au Chemin des Pardiaux, 63000 Clermont-Ferrand, dont le
              numéro de téléphone est 0444446040 et l'adresse e-mail
              support@o2switch.fr.
            </p>
            <h3 className="font-bold pt-4">ARTICLE 3 - ACCÈS AU SITE</h3>
            <p>
              Le Site est accessible gratuitement en tout endroit, 7j/7, 24h/24,
              sauf cas de force majeure, interruption programmée ou non, et
              pouvant découler d’une nécessité de maintenance. Tous les frais
              pour accéder au service (matériel informatique, logiciels,
              connexion Internet, etc.) supportés par l'Utilisateur restent à sa
              charge.
            </p>
            <p>
              En cas de modification, interruption ou suspension du Site,
              l'Éditeur ne saurait être tenu responsable.
            </p>
            <h3 className="font-bold pt-4">ARTICLE 4 - COLLECTE DES DONNÉES</h3>
            <p>
              Le Site assure à l'Utilisateur une collecte et un traitement
              d'informations personnelles dans le respect de la vie privée
              conformément au RGPD et à la loi n°78-17 du 6 janvier 1978
              relative à l'informatique, aux fichiers et aux libertés.
            </p>
            <p>
              Le Site est susceptible de recueillir les types de données
              personnelles suivants : prénom et nom, adresse mail, adresse
              postale, numéro de téléphone, et nom de société éventuellement.
              Ces données sont collectées à des fins commerciales telles que le
              suivi des services fournis ou le traitement des demandes via le
              formulaire de contact.
            </p>
            <p>
              En vertu de la loi Informatique et Libertés, modifiée,
              l'Utilisateur dispose d'un droit d'accès, de rectification, de
              suppression, de portabilité et d'opposition à ses données
              personnelles. L'Utilisateur exerce ce droit par mail à l'adresse
              juliacharlotte@agence-substances.com ou via un formulaire de
              contact.
            </p>
            <h3 className="font-bold pt-4">
              ARTICLE 5 - PROPRIÉTÉ INTELLECTUELLE
            </h3>
            <p>
              Les marques, logos, signes, ainsi que tous les contenus du site
              (textes, images, sons, etc.) font l'objet d'une protection par le
              Code de la propriété intellectuelle et, plus particulièrement, par
              le droit d'auteur.
            </p>
            <p>
              La marque "Substances" est une marque déposée par l'Éditeur. Toute
              représentation et/ou reproduction et/ou exploitation partielle ou
              totale de cette marque, de quelque nature que ce soit, est
              totalement prohibée sans autorisation préalable de l'Éditeur.
            </p>
            <h3 className="font-bold pt-4">
              ARTICLE 6 - GARANTIES & RESPONSABILITÉ
            </h3>
            <p>
              Le Site est fourni « en l’état » et est accessible selon sa
              disponibilité. Bien que l'information fournie soit réputée fiable,
              le Site ne garantit pas l'absence de modifications dues à des
              facteurs externes ou des erreurs involontaires.
            </p>
            <p>
              L'Éditeur ne garantit pas l'exactitude, la précision ou
              l'exhaustivité des informations disponibles sur le Site et invite
              l'Utilisateur à vérifier l'information.
            </p>
            <p>
              La responsabilité de l'Éditeur ne saurait être engagée en cas de
              force majeure ou du fait imprévisible et insurmontable d'un tiers.
            </p>
            <h3 className="font-bold pt-4">
              ARTICLE 7 : DROIT APPLICABLE ET TRIBUNAL COMPÉTENT
            </h3>
            <p>
              Le présent contrat est soumis à la loi française. En cas de litige
              non résolu à l'amiable, le Tribunal de Commerce de Lyon sera seul
              compétent.
            </p>
            <p>
              Pour toute question relative à l’application des présentes CGU,
              vous pouvez joindre l’Éditeur aux coordonnées fournies à l'ARTICLE
              1.
            </p>
          </div>
        </div>
      </main>
      <div className="hidden lg:block">
        <Logo />
      </div>
      <Footer />
    </>
  );
};

export default Mention;
