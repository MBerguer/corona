import React from "react";
import { animated, config, useSpring } from "react-spring";
import Layout from "../components/layout";
import { AnimatedBox, Box } from "../elements";
import styled from "styled-components";
import { transparentize } from "polished";

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
        <Category style={pageAnimation}>Egresos</Category>
        <animated.h1 style={titleAnimation}>Ingresos hopitalarios según semana epidemiológica</animated.h1>
      </PBox>
      <Content bg={"#fafafa"}>
        <PBox style={imagesAnimation} px={[6, 6, 8, 10]}>
          <iframe src="/graphs/egresos/fig_5.html" />
        </PBox>
      </Content>

      <PBox py={[10, 5]} px={[6, 6, 8, 10]}>
        <animated.h1 style={titleAnimation}>Ingresos hopitalarios según semana epidemiológica y sexo</animated.h1>
      </PBox>
      <Content bg={"#fafafa"}>
        <PBox style={imagesAnimation} px={[6, 6, 8, 10]}>
          <iframe src="/graphs/egresos/fig_6.html" />
        </PBox>
      </Content>

      <PBox py={[10, 5]} px={[6, 6, 8, 10]}>
        <animated.h1 style={titleAnimation}>Total de ingresos hospitalariso en Uruguay por todas las causas según semana epidemiológica y región geográfica, para los años 2017, 2018 y 2019</animated.h1>
        <Description style={descAnimation}>
          <div dangerouslySetInnerHTML={{ __html: `En el siguiente gráfico se conforman las siguientes regiones geográficas:<br>
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
          <iframe src="/graphs/egresos/fig_7.html" />
        </PBox>
      </Content>

      <PBox py={[10, 5]} px={[6, 6, 8, 10]}>
        <animated.h1 style={titleAnimation}>Ingresos hopitalarios según semana epidemiológica y tramo etario</animated.h1>
      </PBox>
      <Content bg={"#fafafa"}>
        <PBox style={imagesAnimation} px={[6, 6, 8, 10]}>
          <iframe src="/graphs/egresos/fig_8.html" />
        </PBox>
      </Content>
    </Layout>
  );
};

export default Graficas;
