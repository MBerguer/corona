import React from "react";
import { animated, config, useSpring } from "react-spring";
import Layout from "../components/layout";
import { AnimatedBox, Box } from "../elements";
import styled from "styled-components";
import { transparentize } from "polished";
import {LazyPlot} from '../components/LazyPlot'
import { Accordion } from "../components/Accordion";

import mortalidad1 from '../components/dataGraphs/mortalidad1'
import mortalidad2 from '../components/dataGraphs/mortalidad2'
import mortalidad3 from '../components/dataGraphs/mortalidad3'
import mortalidad4 from '../components/dataGraphs/mortalidad4'

import causas1 from '../components/dataGraphs/causas1'
import causas2 from '../components/dataGraphs/causas2'
import causas3 from '../components/dataGraphs/causas3'
import causas4 from '../components/dataGraphs/causas4'


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

      <h1>Mortalidad</h1>
      <p>
        En esta sección se verá la estructura de mortalidad del Uruguay en los años prepandemia. Esto nos permite tener una línea de referencia para comparar con los fallecimientos en los años de la pandemia.
        Se analizan los tres años inmediatos anteriores al 2020.
      </p>

      <Category style={pageAnimation}>Mortalidad global</Category>
      
      <b>Total de fallecidos y tasa cada 100.000 habitantes en Uruguay por todas las causas según semana epidemiológica, por año</b>      
      <LazyPlot {...mortalidad1} />
      <p>          
        Defunciones ocurridas en Uruguay para los años pre-pandemia 2017, 2018 y 2019 en números absolutos y la tasa cada 100.000 habitantes. Se observa un comportamiento estacional, aumentando la cantidad de fallecimientos en los meses fríos del año.
      </p>

      <br/><br/><br/>

      <b>Total de fallecidos y tasa específica cada 100.000 habitantes en Uruguay por todas las causas según semana epidemiológica y sexo, por año</b>
      <LazyPlot {...mortalidad2} />
      <p>          
        El análisis para los años en estudio muestra que los fallecimientos según sexo son similares en números absolutos mientras que en las tasas específicas se observa un incremento para el caso de los hombres. Este comportamiento se explica por una población total de mujeres mayor que de hombres.
      </p>

      <br/><br/><br/>

      <b>Total de fallecidos y tasa de mortalidad por región en Uruguay, por todas las causas según semana epidemiológica y año (es el título de la gráfica)</b>
      <LazyPlot {...mortalidad3} />

      <Accordion
          title="Nota metodológica Regiones"
          content="Las regiones geográficas conformadas son:<br/>
          - Norte: Artigas, Rivera, Tacuarembó, Salto, Paysandú<br/>
          - Oeste: Río Negro, Soriano, Colonia, Flores, Florida, Durazno, San José<br/>
          - Este: Maldonado, Rocha, Treinta y Tres, Cerro Largo, Lavalleja<br/>
          - Sur: Canelones, Montevideo"
        />

      <p>          
        Cuando se analiza la mortalidad por regiones, a rasgos generales se observa un comportamiento similiar al del total del país. La zona Sur es la que presenta mayor cantidad de fallecidos por ser la que acumula mayor población (56,2% del total), pero al graficar las tasas de mortalidad cada 100.000 habitantes todas las regiones muestran trazos sin diferencias sobresalientes.
      </p>

      <br/><br/><br/>


      <b>Total de fallecidos y tasa de mortalidad por tramo etario en Uruguay por todas las causas, según semana epidemiológica y año</b>
      <LazyPlot {...mortalidad4} />

      <Accordion
          title="Nota del gráfico"
          content="En este gráfico, a diferencia de los anteriores, el color indica el tramo etario y no el año"
        />

      <p>          
        La mortalidad por tramos etarios muestra el comportamiento esperado aumentado la tasa de mortalidad específica conforme aumenta la edad. El grupo de menores de un año presenta características particulares. Este grupo se separa del resto debido a que la mortalidad infantil es un muy buen indicador de las condiciones de salud de la población, a su vez su forma de cálculo se basa en componentes distintos al resto. Los grupos etarios considerados se construyen de acuerdo a similaridad del comportamiento de las causas de muerte dentro del grupo.
      </p>

      <br/><br/><br/>



      <Category style={pageAnimation}><b>Causas de mortalidad global</b></Category>
      <p>
        En esta sección, se analiza la mortalidad según causa. <br/>
        Los gráficos presentados se hacen en base al agregrado de los tres años en estudio (2017, 2018 y 2019)
      </p>
      <br/>
      <p>
        En el gráfico a continuación se presentan los totales de fallecimientos distribuídos por causa según edad. El comportamiento es el esperado:
      </p>
      <ul>
        <li><p>una mayor frecuencia de fallecimientos de menores de un año,</p></li>
        <li><p>una baja mortalidad hasta los 50 años de edad en relación en relación al siguiente tramo etario y</p></li>
        <li><p>un incremento progresivo a partir de los 50 años, donde empieza a tener mayor impacto el cáncer, las enfermedades del sistema circulatorio y respiratorio.</p></li>
      </ul>
      
      <br/><br/><br/><br/>


      <b>Cantidad de fallecimientos promedio de los años 2017, 2018 y 2019 por edad según grandes grupos de causas de muerte</b>
      <LazyPlot {...causas1} />


      <br/><br/><br/>

      <b>Mortalidad proporcional por edad según grandes grupos de causas de muerte</b>
      <LazyPlot {...causas2} />

      <p>          
        Al analizar la relevancia de cada uno de los grandes grupos de causas de muerte dentro de cada año de edad, hasta los 40 años el grupo de las causas externas es el que representa la mayor proporción de muertos(*). Los fallecimientos por causas externas son principalmente por sucidios, accidentes y homicidios.
      </p>
      <p>          
        (*) A modo de ejemplo, a los 18 años de edad el total de fallecidos de la suma de los tres años en estudio fue de 121, de estos, 91 (75,2%) fallecimientos fueron por causas externas, 6 por tumores, 3 por enfermedades del sistema circulatorio, 2 por enfermedades del sistema respiratorio y 19 por causas mal definidas y otras causas.
      </p>


      <br/><br/><br/>



      <b>Mortalidad proporcional para el sexo masculino por edad según grandes grupos de causas de muerte</b>
      <LazyPlot {...causas3} />
      <br/><br/><br/>

      <b>Mortalidad proporcional para el sexo femenino por edad según grandes grupos de causas de muerte</b>
      <LazyPlot {...causas4} />
      <br/><br/><br/>

     
    </Layout>
  );
};

export default Graficas;
