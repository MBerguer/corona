import React from "react";
import { graphql } from "gatsby";
import styled from "styled-components";
import { animated, useSpring, config } from "react-spring";
import Layout from "../components/layout";
import GridItem from "../components/grid-item";
import SEO from "../components/SEO";
import { ChildImageSharp } from "../types";

type PageProps = {
  data: {
    firstProject: {
      title: string;
      slug: string;
      cover: ChildImageSharp;
    };
    threeProjects: {
      nodes: {
        title: string;
        slug: string;
        cover: ChildImageSharp;
      }[];
    };
    aboutUs: ChildImageSharp;
  };
};

const Area = styled(animated.div)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 35vw 40vw 25vw;
  grid-template-areas:
    "first-project about-us about-us"
    "three-projects three-projects three-projects"
    @media (max-width: ${(props) => props.theme.breakpoints[3]}) {
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: 35vw 30vw 30vw 25vw;

    grid-template-areas:
      "first-project first-project about-us about-us"
      "three-projects three-projects three-projects three-projects"
      "three-projects three-projects three-projects three-projects";
  }

  @media (max-width: ${(props) => props.theme.breakpoints[1]}) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(5, 38vw);

    grid-template-areas:
      "first-project about-us"
      "three-projects three-projects"
      "three-projects three-projects"
      "three-projects three-projects";
  }

  @media (max-width: ${(props) => props.theme.breakpoints[0]}) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6, 50vw);

    grid-template-areas:
      "first-project"
      "about-us"
      "three-projects"
      "three-projects"
      "three-projects";
  }
`;

const FirstProject = styled(GridItem)`
  grid-area: first-project;
`;

const AboutUs = styled(GridItem)`
  grid-area: about-us;
`;

const ThreeProjects = styled.div`
  grid-area: three-projects;
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  @media (max-width: ${(props) => props.theme.breakpoints[1]}) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 1fr;
  }
`;

const Index: React.FunctionComponent<PageProps> = ({
  data: { firstProject, threeProjects, aboutUs },
}) => {
  const pageAnimation = useSpring({
    config: config.slow,
    from: { opacity: 0 },
    to: { opacity: 1 },
  });

  return (
    <Layout>
      <SEO />
      <h1>Introducción</h1>
      <p>
        La humanidad, ya hace más de un año que convive con la propagación del
        virus que causa la enfermedad COVID-19, que afecta a un importante
        número de personas y se ha extendido a todo el mundo. Tradicionalmente,
        un fenómeno descrito con estas características recibe el nombre de
        pandemia, con el consiguiente abordaje estrictamente biomédico para
        solucionarlo.
      </p>
      <p>
        Pero ¿la solución es estrictamente biomédica? Creemos que no,
        consideramos que el problema es más complejo, solo puede comprenderse y
        abordarse considerando además de lo biológico otros aspectos subyacentes
        como los económicos, sociales, políticos, ambientes.
      </p>
      <p>
        Pensamos que es necesario un planteamiento sistémico, pensar en clave de{" "}
        <strong>sindemia</strong>. ¿Se reduce entonces el problema a un juego de
        palabras?
      </p>
      <p>
        No, pero elegir la palabra adecuada es fundamental, ya que las palabras
        evocan ideas y conceptos.
      </p>
      <p>
        <strong>¿Por qué debemos enfocarnos en la sindemia?</strong>
      </p>
      <p>
        A medida que el mundo y Uruguay avanzan en muertes por COVID-19, debemos
        enfrentar el hecho de que estamos adoptando un enfoque demasiado
        estrecho para manejar este brote de un nuevo coronavirus. Hemos visto la
        causa de esta crisis como una enfermedad infecciosa. Todas las
        intervenciones se han centrado en cortar las líneas de transmisión
        viral, controlando así la propagación del patógeno. El enfoque que ha
        guiado a los gobiernos ha sido impulsado principalmente por modeladores
        de epidemias y especialistas en enfermedades infecciosas, que
        comprensiblemente enmarcan la actual emergencia sanitaria en términos de
        &quot;peste centenaria&quot;. Pero lo que hemos aprendido hasta ahora
        indica que la historia de COVID-19 no es tan simple. Hay dos categorías
        de enfermedades que interactúan dentro de poblaciones específicas: la
        infección por el coronavirus tipo 2, causante del síndrome respiratorio
        agudo severo, abreviado como SARS-CoV-2 y una serie de enfermedades no
        transmisibles (ENT).
      </p>
      <p>
        Estas condiciones se están concentrando dentro de los grupos sociales
        de acuerdo con patrones de inequidad profundamente arraigados en las
        sociedades. La agregación de estas enfermedades en un contexto de
        inequidad social y económica exacerba los efectos adversos de cada
        enfermedad por separado. COVID-19 no es una pandemia. Es una{" "}
        <strong>sindemia</strong>. La naturaleza <strong>sindémica</strong> de
        la amenaza que enfrentamos significa que se necesita un enfoque{" "}
        <strong>sistémico</strong> si queremos proteger la salud de nuestras
        poblaciones.
      </p>
      <p>
        La noción de <strong>sindemia,</strong> que deriva de sinergia y
        epidemia, fue concebida por primera vez por Merrill Singer, un
        antropólogo médico estadounidense, en la década de 1990. Inicialmente se
        refería a la retroalimentación de dos epidemias que causaban un efecto
        superior a la suma de ambas. Escribiendo en <em>The Lancet</em> en 2017,
        junto con Emily Mendenhall y sus colegas, Singer argumentó que un
        enfoque <strong>sindémico</strong> revela interacciones biológicas y
        sociales que son importantes para el pronóstico, el tratamiento y la
        política de salud. Limitar el daño causado por el SARS-CoV-2 exigirá
        mucha más atención a las ENT y la inequidad socioeconómica de lo que se
        ha admitido hasta ahora. Una <strong>sindemia</strong> no es simplemente
        una comorbilidad, va mucho más allá.{" "}
        <strong>
          Las sindemias se caracterizan por interacciones biológicas y sociales
          entre condiciones y estados, interacciones que aumentan la
          susceptibilidad de una persona a sufrir daños o empeoran sus
          resultados de salud
        </strong>
        . En el caso de COVID-19, atacar las ENT será un requisito previo para
        una contención exitosa. Como mostró el &quot;NCD Countdown 2030&quot;
        publicado recientemente (
        <a href="https://www.ncdcountdown.org/index.html">
          https://www.ncdcountdown.org/index.html
        </a>
        ), aunque la mortalidad prematura por ENT está disminuyendo, el ritmo
        del cambio es demasiado lento. El número total de personas que viven con
        enfermedades crónicas está aumentando. Abordar el COVID-19 significa
        abordar la hipertensión, la obesidad, la diabetes, las enfermedades
        cardiovasculares y respiratorias crónicas y el cáncer.
      </p>
      <p>
        La consecuencia más importante de ver a la COVID-19 como una{" "}
        <strong>sindemia</strong> es subrayar sus orígenes sociales. La
        vulnerabilidad de los ciudadanos mayores, niños, comunidades
        afrodescendientes, grupos minoritarios; los trabajadores clave a quienes
        comúnmente se les paga mal, así como los trabajadores pertenecientes al
        sector informal, con empleos precarios y menos protecciones sociales,
        apuntan a una verdad hasta ahora apenas reconocida, a saber, que no
        importa cuán efectivo sea un tratamiento o una vacuna protectora, la
        búsqueda de una solución puramente biomédica para COVID-19{" "}
        <strong>fracasará</strong>. A menos que los gobiernos diseñen políticas
        y programas para revertir las profundas inequidades, en nuestras
        sociedades nunca estarán verdaderamente seguras contra el COVID-19. Como
        escribieron Singer y sus colegas en 2017, &quot;Un enfoque{" "}
        <strong>sindémico</strong> proporciona una orientación muy diferente a
        la medicina clínica y la salud pública al mostrar cómo un enfoque
        integrado para comprender y tratar enfermedades puede ser mucho más
        exitoso que simplemente controlar la enfermedad epidémica o tratar a
        pacientes individuales&quot;. Agregaría una ventaja más. Nuestras
        sociedades necesitan esperanza. La crisis económica que avanza hacia
        nosotros no se resolverá con un fármaco ni con una vacuna. Se necesita
        como mínimo un resurgimiento/renacimiento nacional. Acercarse a COVID-19
        como una <strong>sindemia</strong> invitará a una visión más amplia, que
        abarque la educación, el empleo, la vivienda, la alimentación y el medio
        ambiente, la salud, estilos de vida. Ver COVID-19 solo como una pandemia
        excluye un espectro tan amplio como necesario.
      </p>
      <p>
        El texto precedente es una traducción y adaptación del artículo original
        publicado en{" "}
        <a href="https://www.thelancet.com/journals/lancet/article/PIIS0140-6736(20">
          The Lancet
        </a>. Horton R. Offline: COVID-19 is not a pandemic,
        setiembre de 2020.
      </p>
      <p>
        <a href="#sdfootnote1anc">1</a> La Organización panamericana de la Salud
        (OPS) define Enfermedades no transmisibles
      </p>
      <p>
        Las enfermedades crónicas, no transmisibles (ENT) son la principal causa
        de muerte y discapacidad en el mundo. El término, enfermedades no
        transmisibles se refiere a un grupo de enfermedades que no son causadas
        principalmente por una infección aguda, dan como resultado consecuencias
        para la salud a largo plazo y con frecuencia crean una necesidad de
        tratamiento y cuidados a largo plazo. Estas condiciones incluyen
        cánceres, enfermedades cardiovasculares, diabetes y enfermedades
        pulmonares crónicas. Muchas enfermedades no transmisibles se pueden
        prevenir mediante la reducción de los factores de riesgo comunes, tales
        como el consumo de tabaco, el consumo nocivo de alcohol, la inactividad
        física y comer alimentos poco saludables. Muchas otras condiciones
        importantes también se consideran enfermedades no transmisibles,
        incluyendo lesiones y trastornos de d mental. Disponible en:{" "}
        <a href="https://www.paho.org/es/temas/enfermedades-no-transmisibles">
          https://www.paho.org/es/temas/enfermedades-no-transmisibles
        </a>
      </p>
    </Layout>
  );
};

export default Index;

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
    aboutUs: file(
      sourceInstanceName: { eq: "images" }
      name: { eq: "about-us" }
    ) {
      childImageSharp {
        fluid(quality: 95, maxWidth: 1200) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;
