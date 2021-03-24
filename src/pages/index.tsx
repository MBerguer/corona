import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import { animated, useSpring, config } from 'react-spring'
import Layout from '../components/layout'
import GridItem from '../components/grid-item'
import SEO from '../components/SEO'
import { ChildImageSharp } from '../types'

type PageProps = {
  data: {
    firstProject: {
      title: string
      slug: string
      cover: ChildImageSharp
    }
    threeProjects: {
      nodes: {
        title: string
        slug: string
        cover: ChildImageSharp
      }[]
    }
    aboutUs: ChildImageSharp
  }
}

const Area = styled(animated.div)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 35vw 40vw 25vw;
  grid-template-areas:
    'first-project about-us about-us'
    'three-projects three-projects three-projects'

  @media (max-width: ${(props) => props.theme.breakpoints[3]}) {
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: 35vw 30vw 30vw 25vw;

    grid-template-areas:
      'first-project first-project about-us about-us'
      'three-projects three-projects three-projects three-projects'
      'three-projects three-projects three-projects three-projects'
  }

  @media (max-width: ${(props) => props.theme.breakpoints[1]}) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(5, 38vw);

    grid-template-areas:
      'first-project about-us'
      'three-projects three-projects'
      'three-projects three-projects'
      'three-projects three-projects'
  }

  @media (max-width: ${(props) => props.theme.breakpoints[0]}) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6, 50vw);

    grid-template-areas:
      'first-project'
      'about-us'
      'three-projects'
      'three-projects'
      'three-projects'
  }
`

const FirstProject = styled(GridItem)`
  grid-area: first-project;
`

const AboutUs = styled(GridItem)`
  grid-area: about-us;
`

const ThreeProjects = styled.div`
  grid-area: three-projects;
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  @media (max-width: ${(props) => props.theme.breakpoints[1]}) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 1fr;
  }
`

const Index: React.FunctionComponent<PageProps> = ({ data: { firstProject, threeProjects, aboutUs } }) => {
  const pageAnimation = useSpring({
    config: config.slow,
    from: { opacity: 0 },
    to: { opacity: 1 },
  })

  return (
    <Layout>
      <SEO />
      <h1>
        ¿Por qué debemos enfocarnos en la sindemia?
      </h1>

      <p>
        A medida que el mundo y Uruguay avanzan en muertes por la COVID-19, debemos enfrentar el hecho de que estamos adoptando un enfoque demasiado estrecho para manejar este brote de un nuevo coronavirus. Hemos visto la causa de esta crisis como una enfermedad infecciosa. Todas las intervenciones se han centrado en cortar las líneas de transmisión viral, controlando así la propagación del patógeno. El enfoque que ha guiado a los gobiernos ha sido impulsado principalmente por modeladores de epidemias y especialistas en enfermedades infecciosas, que comprensiblemente enmarcan la actual emergencia sanitaria en términos de “peste centenaria”. Pero lo que hemos aprendido hasta ahora indicaque la historia de la COVID-19 no es tan simple. Hay dos categorías de enfermedades que interactúan dentro de poblaciones específicas: la infección por el coronavirus tipo 2, causante del síndrome respiratorio agudo severo, abreviado como SARS-CoV-2 y una serie de enfermedades no transmisibles (ENT) . Estas condiciones se están concentrando dentro de los grupos sociales de acuerdo con patrones de inequidad profundamente arraigados en las sociedades. La agregación de estas enfermedades en un contexto de inequidad social y económica exacerba los efectos adversos de cada enfermedad por separado. La COVID-19 no es una pandemia. Es una sindemia. La naturaleza sindémica de la amenaza que enfrentamos significa que se necesita un enfoque sistémico si queremos proteger la salud de nuestras poblaciones. La noción de sindemia fue concebida por primera vez por Merrill Singer, un antropólogo médico estadounidense, en la década de 1990. Escribiendo en The Lancet en 2017, junto con Emily Mendenhall y sus colegas, Singer argumentó que un enfoque sindémico revela interacciones biológicas y sociales que son importantes para el pronóstico, el tratamiento y la política de salud. Limitar el daño causado por el SARS-CoV-2 exigirá mucha más atención a las ENT y a la inequidad socioeconómica de lo que se ha admitido hasta ahora. Una sindemia no es simplemente una comorbilidad. Las sindemias se caracterizan por interacciones biológicas y sociales entre condiciones y estados, interacciones que aumentan la susceptibilidad de una persona a sufrir daños o empeoran sus resultados de salud. En el caso de la COVID-19, atacar las ENT será un requisito previo para una contención exitosa. Como mostró el “NCD Countdown 2030” publicado recientemente (https://www.ncdcountdown.org/index.html), aunque la mortalidad prematura por ENT está disminuyendo, el ritmo del cambio es demasiado lento. El número total de personas que viven con enfermedades crónicas está aumentando. Abordar la COVID-19 significa abordar la hipertensión, la obesidad, la diabetes, las enfermedades cardiovasculares y respiratorias crónicas y el cáncer. Uruguay no es ajeno a esta situación.      
        <br/> <br/> <br/>
      </p>
    </Layout>
  )
}

export default Index

export const query = graphql`
  query Index {
    firstProject: projectsYaml {
      title
      slug
      cover {
        childImageSharp {
          fluid(quality: 95, maxWidth: 1200) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
    threeProjects: allProjectsYaml(limit: 3, skip: 1) {
      nodes {
        title
        slug
        cover {
          childImageSharp {
            fluid(quality: 95, maxWidth: 1200) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
    aboutUs: file(sourceInstanceName: { eq: "images" }, name: { eq: "about-us" }) {
      childImageSharp {
        fluid(quality: 95, maxWidth: 1200) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
