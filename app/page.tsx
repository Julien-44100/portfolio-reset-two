import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <h1 className={styles.slideInFromLeft}>
        Je suis Julien Botar
      </h1>
	  {/* , développeur web junior,  */}
	  {/* découvrez mon&nbsp;savoir-faire à travers ce portfolio. */}

      <section className={styles.frontendbackend}>
        <section
          className={`${styles.section} ${styles.slideInFromLeft} ${styles.frontend}`}
        >
          <h2>Front-End</h2>
          <ul>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>JavaScript + React + Next.js</li>
          </ul>
        </section>
        <section
          className={`${styles.section} ${styles.slideInFromLeft} ${styles.backend}`}
        >
          <h2>Back-End</h2>
          <ul>
            <li>Express.js</li>
            <li>SQL</li>
          </ul>
        </section>
      </section>

      <section className={`${styles.section} ${styles.slideInFromLeft} ${styles.database}`}>
        <h2>Base de données</h2>
        <ul>
          <li>SQL</li>
        </ul>
      </section>

      <section className={`${styles.section} ${styles.slideInFromLeft} ${styles.workflow}`}>
        <h2>Outils &amp; Workflow</h2>
        <ul>
          <li>Git / GitHub pour versionner, sauvegarder et collaborer sur du code.</li>
          <li>Figma et Excalidraw pour le wireframe et le maquettage.</li>
          <li>Vercel pour le déploiement.</li>
          <li>Notions sur Docker</li>
        </ul>
      </section>

      <section className={`${styles.section} ${styles.slideInFromLeft} ${styles.softskills}`}>
        <h2>Méthodologies &amp; Soft Skills</h2>
        <ul>
          <li>Travail en équipe et revues de code.</li>
          <li>Gestion de projet agile.</li>
          <li>Vercel pour le déploiement.</li>
        </ul>
      </section>

      <section className={`${styles.section} ${styles.slideInFromLeft} ${styles.path}`}>
        <h2>Parcours &amp; Certificats</h2>
        <ul>
          <li>Wild Code School — Nantes, 21 septembre 2024 au 21 février 2025.</li>
          <li>Stage développeur web chez Hoc Job, mise en pratique du 24 juin 2024 au 8 juillet 2024.</li>
          <li>Autoformation à distance, développement web avec 3W Academy, de janvier 2024 à juin 2024.</li>
        </ul>
      </section>

      <section className={`${styles.section} ${styles.slideInFromLeft} ${styles.projectandgithub}`}>
        <h2>Projet &amp; GitHub</h2>

        <p>
          <strong>🎨 Street Art Venture</strong>
        </p>
        <ul>
          <li>
            C&apos;est un projet web développé dans le cadre de ma formation de développeur web à la Wild Code School. Il
            s&apos;agit d&apos;une application interactive dédiée à la découverte du street art à travers le monde.
          </li>
        </ul>

        <p>
          <b>Objectif&nbsp;:</b>
        </p>
        <ul>
          <li>
            Permettre aux utilisateurs de découvrir des œuvres de street art géolocalisées, d&apos;explorer leur
            emplacement sur une carte interactive, et de contribuer en partageant leurs propres découvertes.
          </li>
        </ul>

        <p>
          <b>Technologies utilisées&nbsp;:</b>
        </p>
        <ul>
          <li>React</li>
          <li>CSS Modules</li>
          <li>JavaScript</li>
          <li>Express.js</li>
          <li>SQL</li>
        </ul>

        <p>
          <b>Fonctionnalités principales&nbsp;:</b>
        </p>
        <ul>
          <li>Interface animée, carte interactive</li>
          <li>Filtre par ville/artiste</li>
          <li>Structure en composants</li>
        </ul>

        <p>
          <b>En équipe&nbsp;:</b>
        </p>
        <ul>
          <li>Développement collaboratif en 2 mois avec Git/GitHub</li>
          <li>Organisation Agile</li>
          <li>Revues de code</li>
          <li>Daily meetings</li>
        </ul>

        <p>
          <b>Ce que j&apos;ai appris&nbsp;:</b>
        </p>
        <ul>
          <li>React</li>
          <li>Travail d&apos;équipe</li>
          <li>Structuration d&apos;un projet complet</li>
          <li>Création d&apos;API côté back-end</li>
        </ul>

        <p>
          <strong>➡️ Vidéo présentation du projet&nbsp;:</strong>
        </p>
        <a
          href="https://www.youtube.com/watch?v=G3SCCAUrJvw&t=12s"
          target="_blank"
          rel="noopener noreferrer"
        >
          🎥 Voir la vidéo de présentation sur YouTube
        </a>

        <p>
          <strong>➡️ Voir mon profil GitHub&nbsp;:</strong>
        </p>
        <a
          href="https://github.com/Julien-44100?tab=overview&from=2025-05-01&to=2025-05-31"
          target="_blank"
          rel="noopener noreferrer"
        >
          🔗 Voir mon profil sur GitHub
        </a>
      </section>

      <section className={`${styles.section} ${styles.slideInFromLeft} ${styles.contact}`}>
        <h2>Contact</h2>
        <ul>
          <li>Email : julienbotar44100@yahoo.com</li>
          <li>Tél : 07 69 63 70 84</li>
        </ul>
        <p className={styles.cvandlm}>
          CV et lettre de motivation à télécharger
        </p>
        <div className={styles.cvandletterofmotivation}>
          <a href="/cvetlm/CV Stage.pdf" download>
            📥 Télécharger mon CV pour une recherche de stage
          </a>
          <a href="/cvetlm/LM Stage.pdf" download>
            📥 Télécharger ma lettre de motivation pour une recherche de stage
          </a>
        </div>
      </section>

      <div className={styles.webdeveloppementstyle}>
        <a
          href="https://www.w3schools.com/css/css_intro.asp"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/image/css.png"
            alt="Logo CSS"
            width={48}
            height={48}
            className={styles.webdeveloppement}
          />
        </a>
        <a
          href="https://www.geeksforgeeks.org/backend-development/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/image/express.js-sql.png"
            alt="Logo Express.js & SQL"
            width={48}
            height={48}
            className={styles.webdeveloppement}
          />
        </a>
        <a
          href="https://www.w3schools.com/git/git_intro.asp?remote=github"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/image/git-github.png"
            alt="Logo Git & GitHub"
            width={48}
            height={48}
            className={styles.webdeveloppement}
          />
        </a>
        <a
          href="https://www.w3schools.com/html/html_intro.asp"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/image/html.png"
            alt="Logo HTML"
            width={48}
            height={48}
            className={styles.webdeveloppement}
          />
        </a>
      </div>
    </div>
  );
}
