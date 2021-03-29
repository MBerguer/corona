import React from "react";
import { animated, config, useSpring } from "react-spring";
import Layout from "../components/layout";
import { AnimatedBox, Box } from "../elements";
import styled from "styled-components";
import { transparentize } from "polished";
import {LazyPlot} from '../components/LazyPlot'

import mortalidad1 from '../components/dataGraphs/mortalidad1'
import mortalidad2 from '../components/dataGraphs/mortalidad2'
import mortalidad3 from '../components/dataGraphs/mortalidad3'
import mortalidad4 from '../components/dataGraphs/mortalidad4'

const PBox = styled(AnimatedBox)`
  max-width: 1400px;
  margin: 0 auto;
`;
const Category = styled(AnimatedBox)`
  letter-spacing: 0.05em;
  font-size: ${(props) => props.theme.fontSizes[1]};
  text-transform: uppercase;
`;

const Description = styled(animated.div)`
  max-width: 960px;
  letter-spacing: -0.003em;
  --baseline-multiplier: 0.179;
  --x-height-multiplier: 0.35;
  line-height: 1.58;
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

const Graficas = () => {
  const pageAnimation = useSpring({
    config: config.slow,
    from: { opacity: 0 },
    to: { opacity: 1 },
  });
  const titleAnimation = useSpring({
    config: config.slow,
    delay: 300,
    from: { opacity: 0 },
    to: { opacity: 1 },
  });
  const descAnimation = useSpring({
    config: config.slow,
    delay: 600,
    from: { opacity: 0 },
    to: { opacity: 1 },
  });
  const imagesAnimation = useSpring({
    config: config.slow,
    delay: 800,
    from: { opacity: 0 },
    to: { opacity: 1 },
  });

  return (
    <Layout>
      <PBox py={[10, 5]} px={[6, 6, 8, 10]}>
        <Category style={pageAnimation}>Mortalidad</Category>
        <animated.h1 style={titleAnimation}>Total de fallecidos y tasa cada 100.000 habitantes en Uruguay por todas las causas según semana epidemiológica, por año</animated.h1>
        <Description style={descAnimation}>
          <div dangerouslySetInnerHTML={{ __html: "La siguiente gráfica muestra las defunciones ocurridas en Uruguay para los años pre-pandemia 2017, 2018 y 2019 en números absolutos y la tasa cada 100.000 habitantes. Se observa un comportamiento estacional, aumentando la cantidad de fallecimientos en los meses fríos del año." }} />
        </Description>
      </PBox>
      <Content bg={"#fafafa"}>
        <PBox style={imagesAnimation} px={[6, 6, 8, 10]}>
          <LazyPlot {...mortalidad1} />
          {/* <iframe src="/graphs/mortalidad/fig_1.html" /> */}
          <Description style={descAnimation}>
            <div className='note' dangerouslySetInnerHTML={{ __html: "Mortalidad 2019 según semana epidemiológica. Se descartan los fallecidos de los días 29, 30 y 31 de diciembre por corresponder a la primera semana epidemiológica del 2020" }} />
          </Description>
        </PBox>
      </Content>

      <PBox py={[10, 5]} px={[6, 6, 8, 10]}>
        <animated.h1 style={titleAnimation}>Total de fallecidos y tasa específica cada 100.000 habitantes en Uruguay por todas las causas según semana epidemiológica y sexo, por año</animated.h1>
        <Description style={descAnimation}>
          <div dangerouslySetInnerHTML={{ __html: "El análisis para los años en estudio muestra que los fallecimientos según sexo son similares en números absolutos mientras que en las tasas específicas se observa un incremento para el caso de los hombres. Este comportamiento se explica por una población total de mujeres mayor que de hombres." }} />
        </Description>
      </PBox>
      <Content bg={"#fafafa"}>
        <PBox style={imagesAnimation} px={[6, 6, 8, 10]}>
        <LazyPlot {...mortalidad2} />
        {/* <iframe src="/graphs/mortalidad/fig_2.html" /> */}
        </PBox>
      </Content>

      <PBox py={[10, 5]} px={[6, 6, 8, 10]}>
        <animated.h1 style={titleAnimation}>Total de fallecidos en Uruguay por todas las causas según semana epidemiológica por región geográfica y año</animated.h1>
        <Description style={descAnimation}>
          <div dangerouslySetInnerHTML={{ __html: `En el gráfico a continuación se conforman las siguientes regiones geográficas:<br>
- Norte: Artigas, Rivera, Tacuarembó, Salto, Paysandú<br>
- Oeste: Río Negro, Soriano, Colonia, Flores, Florida, Durazno, San José<br>
- Este: Maldonado, Rocha, Treinta y Tres, Cerro Largo, Lavalleja<br>
- Sur: Canelones, Montevideo<br>
<br>
La zona Sur es la que presenta mayor cantidad de fallecidos por ser la que acumula mayor población (56,2% del total)` }} />
        </Description>
      </PBox>
      <Content bg={"#fafafa"}>
        <PBox style={imagesAnimation} px={[6, 6, 8, 10]}>
          <LazyPlot {...mortalidad3} />
          {/* <iframe src="/graphs/mortalidad/fig_3.html" /> */}
        </PBox>
      </Content>

      <PBox py={[10, 5]} px={[6, 6, 8, 10]}>
        <animated.h1 style={titleAnimation}>Total de fallecidos en Uruguay por todas las causas según semana epidemiológica por tramo etario y año</animated.h1>
        <Description style={descAnimation}>
          <div dangerouslySetInnerHTML={{ __html: `El gráfico por tramos etarios muestra el comportamiento esperado, aumentado la tasa de mortalidad específica conforme aumenta la edad. El grupo de menores de un año presenta características particulares, dado que el denominador se compone solo a los nacidos vivos para el año y en el numerador se encuentran los fallecimientos por causa… justifica Fiorella Los grupos etarios considerados se construyen de acuerdo a similaridad del comportamiento de las causas de muerte dentro del grupo.` }} />
        </Description>
      </PBox>
      <Content bg={"#fafafa"}>
        <PBox style={imagesAnimation} px={[6, 6, 8, 10]}>
          <LazyPlot {...mortalidad4} />
          {/* <iframe src="/graphs/mortalidad/fig_4.html" /> */}
        </PBox>
      </Content>
    </Layout>
  );
};

export default Graficas;
