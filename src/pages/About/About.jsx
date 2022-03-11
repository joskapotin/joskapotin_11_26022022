import Hero from '../../components/Hero/Hero'
import Accordion from '../../components/Accordion/Accordion'
import image from '../../assets/images/hero02.png'
import styles from './About.module.scss'

function About() {
  return (
    <main id="main-content" className="main">
      <Hero image={image} />
      <div className={styles.accordions}>
        <Accordion title="Fiabilité">
          <p>
            Les annonces postées sur Kasa garantissent une fiabilité totale. Les
            photos sont conformes aux logements, et toutes les informations sont
            régulièrement vérifiées par nos équipes.
          </p>
        </Accordion>
        <Accordion title="Respect">
          <p>
            La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
            comportement discriminatoire ou de perturbation du voisinage
            entraînera une exclusion de notre plateforme.
          </p>
        </Accordion>
        <Accordion title="Service">
          <p>
            Nos équipes se tiennent à votre disposition pour vous fournir une
            expérience parfaite. N&apos;hésitez pas à nous contacter si vous
            avez la moindre question.
          </p>
        </Accordion>
        <Accordion title="Securité">
          <p>
            La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que
            pour les voyageurs, chaque logement correspond aux critères de
            sécurité établis par nos services. En laissant une note aussi bien à
            l&apos;hôte qu&apos;au locataire, cela permet à nos équipes de
            vérifier que les standards sont bien respectés. Nous organisons
            également des ateliers sur la sécurité domestique pour nos hôtes.
          </p>
        </Accordion>
      </div>
    </main>
  )
}

export default About
