import React from "react";
import { graphql } from "gatsby";
import styled from "styled-components";
import { animated, useSpring, config } from "react-spring";
import Layout from "../components/layout";
import GridItem from "../components/grid-item";
import SEO from "../components/SEO";
import { ChildImageSharp } from "../types";
import { MDXProvider } from "@mdx-js/react";
import { LazyPlot } from "../components/LazyPlot";
import img_2020 from "../images/2020.png";
import img_2021 from "../images/2021.png";
import intro_1 from '../components/dataGraphs/intro_1';
import intro_2 from '../components/dataGraphs/intro_2';

import { AnimatedBox, Box } from "../elements";
import { transparentize } from "polished";

const PBox = styled(AnimatedBox)`
  max-width: 1400px;
  margin: 0 auto;
`;  

const Content = styled(Box)<{ bg: string }>`
  background-color: ${(props) => transparentize(0.9, props.bg)};

  .gatsby-image-wrapper:not(:last-child) {
    margin-bottom: ${(props) => props.theme.space[10]};

    @media (max-width: ${(props) => props.theme.breakpoints[3]}) {
      margin-bottom: ${(props) => props.theme.space[8]};
    }
  }
`;


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
    <MDXProvider components={components}>
      <Layout>
        <SEO />
        <p>
          A medida que el mundo y Uruguay avanzaron en muertes por la COVID-19, tuvimos que enfrentar el hecho de que estábamos adoptando un enfoque demasiado estrecho para manejar este brote de un nuevo coronavirus. Hemos visto la causa de esta crisis como una enfermedad infecciosa. Las intervenciones se han centrado principalmente en cortar las líneas de transmisión viral.
        </p>
        <p>
          Teniendo en cuenta que en nuestro país las Enfermedades No Transmisibles (ENT) prevalentes son el origen de la mayor parte de las discapacidades que presentan los individuos, incrementando sus necesidades asistenciales. Las ENT, son responsables del 60% de todas las muertes y del 62% de las muertes entre los 30 y los 69 años (mortalidad precoz). La conjunción de la COVID-19 y el grupo de ENT en un contexto de inequidad social y económica exacerba los efectos adversos de cada enfermedad por separado. La COVID-19 no es una pandemia. Es una sindemia. La naturaleza sindémica de la amenaza que enfrentamos significa que se necesita un enfoque sistémico si queremos proteger la salud de la población.
        </p>
        <p>
          Las sindemias se caracterizan por interacciones biológicas y sociales entre condiciones y estados, interacciones que aumentan la susceptibilidad de una persona a sufrir daños o empeoran sus resultados de salud. En el caso de la COVID-19, atacar las ENT es un requisito previo para una contención exitosa. Como mostró el “NCD Countdown 2030” publicado recientemente (<a href="https://www.ncdcountdown.org/index.html">https://www.ncdcountdown.org/index.html</a>), aunque la mortalidad prematura por ENT está disminuyendo, el ritmo del cambio es demasiado lento. El número total de personas que viven con enfermedades crónicas está aumentando. Abordar la COVID-19 significa abordar la hipertensión, la obesidad, la diabetes, las enfermedades cardiovasculares y respiratorias crónicas y el cáncer. Uruguay no es ajeno a esta situación.       
        </p>
        <p>
          <strong>Situación actual</strong>
        </p>
        <p>
          El los primeros seis meses del 2021 fallecieron en Uruguay 5501 personas por COVID-19.
        </p>
        <p>
          El mayor impacto de la pandemia en el país en términos de casos y fallecimientos empezó en enero de 2021. Sin embargo, además de los de 181 fallecimientos del año 2020, los impactos de la pandemia iniciaron desde el momento en que comenzaron a ocurrir restricciones en la continuidad de la atención sanitaria.
        </p>

        <div className={"wrapper"}>
          <img src={img_2020} alt="2020" />
          <img src={img_2021} alt="2021" />
        </div>
        <p>
          Si se compara con las principales causas de mortalidad en 2019, se observa que en los meses de abril y mayo de 2021 los fallecimientos por COVID-19 superaron a los fallecimientos esperados por cualquiera de los tres principales grupos de causas de muerte previos a la pandemia en nuestro país.
        </p>
        <p>
          Distribución de fallecimientos por covid 19 y los tres principales grupos de causa de muerte según semana epidemiológica en Uruguay
        </p>
        <p>
          Nota: Los fallecimientos de los 3 principales grupos de causas de muerte son con los datos de 2019 y su respectivo intervalo de confianza, mientras que los fallecimientos por covid-19 son datos correspondientes al 2021
        </p>

        <Content bg={"#fafafa"}>
          <PBox px={[6, 6, 8, 10]}>
            <LazyPlot {...intro_1} />
          </PBox>
        </Content>
        <p>
          Para poder comparar el efecto de la COVID-19 respecto a lo que ha sucedido en años prepandemia con los fallecimientos por enfermedades del sistema respiratorio (ESR), se analizan los AVP promedio por mes en los primeros seis meses del año 2019 para ESR y del año 2021 para COVID-19.
        </p>

        <Content bg={"#fafafa"}>
          <PBox px={[6, 6, 8, 10]}>
            <LazyPlot {...intro_2} />
          </PBox>
        </Content>
        
        <p>
        El gráfico revela que si bien en todos los meses analizados los AVP promedio por COVID-19 superan a los AVP promedio por ESR, esta diferencia se va ampliando mostrando como la COVID-19 afectó a personas de grupos etarios más jóvenes, llegando en el mes de junio a duplicar el valor promedio de AVP.
        </p>

      </Layout>
    </MDXProvider>
  );
};

export default Index;
const components = {
  LazyPlot,
};

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
