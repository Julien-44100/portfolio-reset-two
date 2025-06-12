import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
	return (
		<div className={styles.page}>
			<h1 className={styles.slideInFromLeft}>
				Je suis Julien Botar, développeur web junior, découvrez mon
				savoir-faire à travers ce portfolio.
			</h1>

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
				<h2>Outils & Workflow</h2>
				<ul>
					<li>Git / GitHub pour versionner, sauvegarder et collaborer sur du code.</li>
					<li>Figma et Excalidraw pour le wireframe et le maquettage.</li>
					<li>Vercel pour le déploiement.</li>
					<li>Notions sur Docker</li>
				</ul>
			</section>

			<section className={`${styles.section} ${styles.slideInFromLeft} ${styles.softskills}`}>
				<h2>Méthodologies & Soft Skills</h2>
				<ul>
					<li>Travail en équipe et revues de code.</li>
					<li>Gestion de projet agile.</li>
					<li>Vercel pour le déploiement.</li>
				</ul>
			</section>

			<section className={`${styles.section} ${styles.slideInFromLeft} ${styles.path}`}>
				<h2>Parcours & Certificats</h2>
				<ul>
					<li>Wild Code School — Nantes, 21 septembre 2024 au 21 février 2025.</li>
					<li>Stage développeur web chez Hoc Job, mise en pratique du 24 juin 2024 au 8 juillet 2024.</li>
					<li>Autoformation à distance, développement web avec 3W Academy, de janvier 2024 à juin 2024.</li>
				</ul>
			</section>

			<section className={`${styles.section} ${styles.slideInFromLeft} ${styles.projectandgithub}`}>
				<h2>Projet & GitHub</h2>
				<p>
					<strong>🎨 Street Art Venture</strong> 
					</p>
					<ul>
					<li>C'est un projet web développé dans le cadre de ma formation de développeur web à la Wild Code School. Il s’agit d’une application interactive dédiée à la découverte du street art à travers le monde.</li>
</ul>
				
				<p>
					<b>Objectif :</b>
				</p>
				<ul>
					<li> Permettre aux utilisateurs de découvrir des œuvres de street art géolocalisées, d’explorer leur emplacement sur une carte interactive, et de contribuer en partageant leurs propres découvertes.</li>
				</ul>
				<p>
					<b>Technologies utilisées :</b> 
				</p>
				<ul>
					<li>React</li>
					<li>CSS Modules</li>
					<li>JavaScript</li>
					<li>Express.js</li>
					<li>SQL</li>
				</ul>
				<p>
					<b>Fonctionnalités principales :</b> 
				</p>
				<ul>
					<li>Interface animée, carte interactive</li>
					<li>Filtre par ville/artiste</li>
					<li>Et structure en composants</li>
				</ul>
				<p>
					<b>En équipe :</b> 
				</p>
				<ul>
					<li>Développement collaboratif en 2 mois avec Git/GitHub</li>
					<li>Organisation Agile</li>
					<li>Revues de code</li>
					<li>Daily meetings</li>
				</ul>
				<p>
					<b>Ce que j’ai appris :</b> 
				</p>
				<ul>
					<li>React</li>
					<li>Travail d’équipe</li>
					<li>Structuration d’un projet complet</li>
					<li>Création d'API coté back-end</li>
				</ul>
				<p>
					<strong>➡️ Vidéo présentation du projet:</strong>
				</p>
			<a href="https://www.youtube.com/watch?v=G3SCCAUrJvw&t=12s" target="_blank" rel="noopener noreferrer">
  🎥 Voir la vidéo de présentation sur YouTube
</a>
<p>
					<strong>➡️ Voir mon porfil github:</strong>
				</p>
				<a href="https://github.com/Julien-44100?tab=overview&from=2025-05-01&to=2025-05-31" target="_blank" rel="noopener noreferrer">
  🎥 Voir mon profil sur github
</a>
			</section>
			<section className={`${styles.section} ${styles.slideInFromLeft} ${styles.contact}`}>
				<h2>Contact</h2>
				<ul>
					<li>Email : julienbotar44100@yahoo.com</li>
					 <li>Tel : 07 69 63 70 84 </li>
					
				</ul>
				<p className={styles.cvandlm}> Cv et lettre de motivation à télécharger
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
<a href="https://www.w3schools.com/css/css_intro.asp" target="_blank" rel="noopener noreferrer">
  <img
    src="/image/css.png"
    alt="logo web développement"
    className={styles.webdeveloppement}
  />
</a>
<a href="https://www.geeksforgeeks.org/backend-development/" target="_blank" rel="noopener noreferrer">
<img src="/image/express.js-sql.png" alt="logo web développement" className={`${styles.webdeveloppement}`} />
</a>
<a href="https://www.w3schools.com/git/git_intro.asp?remote=github" target="_blank" rel="noopener noreferrer">
<img src="/image/git-github.png" alt="logo web développement" className={`${styles.webdeveloppement}`} />
</a>
<a href="https://www.w3schools.com/html/html_intro.asp" target="_blank" rel="noopener noreferrer">
<img src="/image/html.png" alt="logo web développement" className={`${styles.webdeveloppement}`} />
</a>
</div>
		</div>
	);
}
