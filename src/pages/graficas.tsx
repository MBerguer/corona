import React from 'react'
import {animated, config, useSpring} from 'react-spring'
import Layout from '../components/layout'
import {AnimatedBox, Box} from '../elements'
import Img from "gatsby-image";
import styled from "styled-components";
import {transparentize} from "polished";
import {width} from "styled-system";


const PBox = styled(AnimatedBox)`
  max-width: 1400px;
  margin: 0 auto;
`
const Category = styled(AnimatedBox)`
  letter-spacing: 0.05em;
  font-size: ${(props) => props.theme.fontSizes[1]};
  text-transform: uppercase;
`

const Description = styled(animated.div)`
  max-width: 960px;
  letter-spacing: -0.003em;
  --baseline-multiplier: 0.179;
  --x-height-multiplier: 0.35;
  line-height: 1.58;
`

const Content = styled(Box)<{ bg: string }>`
  background-color: ${(props) => transparentize(0.9, props.bg)};

  .gatsby-image-wrapper:not(:last-child) {
    margin-bottom: ${(props) => props.theme.space[10]};

    @media (max-width: ${(props) => props.theme.breakpoints[3]}) {
      margin-bottom: ${(props) => props.theme.space[8]};
    }
  }
`


const Graficas = () => {
  const pageAnimation = useSpring({
    config: config.slow,
    from: { opacity: 0 },
    to: { opacity: 1 },
  })
  const titleAnimation = useSpring({ config: config.slow, delay: 300, from: { opacity: 0 }, to: { opacity: 1 } })
  const descAnimation = useSpring({ config: config.slow, delay: 600, from: { opacity: 0 }, to: { opacity: 1 } })
  const imagesAnimation = useSpring({ config: config.slow, delay: 800, from: { opacity: 0 }, to: { opacity: 1 } })

  return (
    <Layout>

        <PBox py={[10, 5]} px={[6, 6, 8, 10]}>
            <Category style={pageAnimation}>Detalles tecnicos</Category>
            <animated.h1 style={titleAnimation}>Grafica 1</animated.h1>
            <Description style={descAnimation}>
                <div dangerouslySetInnerHTML={{ __html: "sarasa de la grafica 1" }} />
            </Description>
        </PBox>
        <Content bg={"#fafafa"}>
            <PBox style={imagesAnimation} px={[6, 6, 8, 10]}>
                <iframe src="/graphs/Mort_por_Region.html"/>
            </PBox>
        </Content>


        <PBox py={[10, 5]} px={[6, 6, 8, 10]}>
            <animated.h1 style={titleAnimation}>Grafica 2</animated.h1>
            <Description style={descAnimation}>
                <div dangerouslySetInnerHTML={{ __html: "sarasa de la grafica 1" }} />
            </Description>
        </PBox>
        <Content bg={"#fafafa"}>
            <PBox style={imagesAnimation} px={[6, 6, 8, 10]}>
                <iframe src="/graphs/Mort_por_Sexo.html"/>
            </PBox>
        </Content>


        <PBox py={[10, 5]} px={[6, 6, 8, 10]}>
            <animated.h1 style={titleAnimation}>Grafica 3</animated.h1>
            <Description style={descAnimation}>
                <div dangerouslySetInnerHTML={{ __html: "sarasa de la grafica 1" }} />
            </Description>
        </PBox>
        <Content bg={"#fafafa"}>
            <PBox style={imagesAnimation} px={[6, 6, 8, 10]}>
                <iframe src="/graphs/Mort_por_Sexo_con_titulo.html"/>
            </PBox>
        </Content>

        <PBox py={[10, 5]} px={[6, 6, 8, 10]}>
            <animated.h1 style={titleAnimation}>Grafica 4</animated.h1>
            <Description style={descAnimation}>
                <div dangerouslySetInnerHTML={{ __html: "sarasa de la grafica 1" }} />
            </Description>
        </PBox>
        <Content bg={"#fafafa"}>
            <PBox style={imagesAnimation} px={[6, 6, 8, 10]}>
                <iframe src="/graphs/Mortalidad_por_semana.html"/>
            </PBox>
        </Content>

    </Layout>
  )
}

export default Graficas
