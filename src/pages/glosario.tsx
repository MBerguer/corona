import React from "react";
import { animated, config, useSpring } from "react-spring";
import Layout from "../components/layout";
import { AnimatedBox, Box } from "../elements";
import styled from "styled-components";
import { transparentize } from "polished";
import { LazyPlot } from "../components/LazyPlot";

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
      <div class="chart-stage">
          <p>
            <strong>Vigilancia epidemiológica</strong>: recolección sistemática, continua, oportuna y confiable de información relevante y necesaria sobre algunas condiciones de salud de la población. El análisis e interpretación de los datos debe proporcionar bases para la toma de decisiones y al mismo tiempo ser utilizada para su difusión.</p>
          <p>
          Fuente: <a href="www.paho.org/spanish/ad/dpc/nc/guidelines-5-sp.PDF">www.paho.org/spanish/ad/dpc/nc/guidelines-5-sp.PDF</a></p>
          <p>
            <strong>Calendario epidemiológico</strong>: Para realizar las acciones de vigilancia epidemiológica, se requiere agrupar los padecimientos o eventos epidemiológicos alrededor de un período de tiempo determinado. Este período es generalmente de una semana y se le conoce como semana epidemiológica; a su vez, a la división de los 365 días del año en semanas epidemiológicas, se le conoce como calendario epidemiológico (1), el cual es un instrumento de estandarización de la variable tiempo para los fines de la vigilancia epidemiológica. La importancia de la división y sobre todo de la utilización de las semanas epidemiológicas, radica en que permite la comparación de eventos epidemiológicos sucedidos en determinado año o período dentro de un año, con los de años previos. Facilita asimismo, la comparación entre países, dado que se trata de una metodología epidemiológica adoptada oficialmente en el ámbito internacional (2). Las semanas epidemiológicas que utilizaremos, al igual que el sistema que utiliza Uruguay, el CDC, inician en domingo y terminan en sábado; para designar la primera semana epidemiológica del año, se ubica el primer sábado de enero que incluya en los días inmediatamente precedentes, cuatro o más días del mes de enero, aun cuando esa primera semana se inicie en diciembre.</p>
          <p>
            Fuente: Ministerio de Salud Pública, Boletín Epidemiológico, 2011. <a href="https://www.gub.uy/ministerio-salud-publica/sites/ministerio-salud-publica/files/documentos/publicaciones/boletin_epidemiologico_definiciones_casos.pdf" class="uri">https://www.gub.uy/ministerio-salud-publica/sites/ministerio-salud-publica/files/documentos/publicaciones/boletin_epidemiologico_definiciones_casos.pdf</a></p>
          <p>
            En el caso de los años incluidos en el presente estudio, 2017 a 2019, la primera semana epidemiológica del año 2017 inicia el domingo primero de enero razón por la cual se incluyen todos los fallecimientos ocurridos desde el inicio del período considerado. Sin embargo, la última semana epidemiológica del año 2019 finaliza el 28 de diciembre razón por la cual los fallecimientos ocurridos los días 29, 30 y 31 de diciembre no han sido considerados en los análisis realizados por semana epidemiológica.</p>
          <ol>
            <li>
                <p>Puede acceder a visualizar calendario epidemiológico de distintos años en el siguiente link: <a href="www.ministeriodesalud.go.cr">www.ministeriodesalud.go.cr</a></p>
            </li>
            <li>
                <p>Los sistemas más comunes cuando se trata de semanas epidemiológicas son los sistemas CDC e ISO. El sistema CDC se utiliza en países como Estados Unidos, Canadá, Australia, India, Egipto y Arabia Saudita. El sistema ISO se utiliza en todos los países europeos y la mayoría de los asiáticos. El CDC define la semana (semana MMWR ) como siete días, comenzando con el domingo y terminando con el sábado. La ISO define la semana (semana ISO ) como siete días, comenzando con el lunes y terminando con el domingo.</p>
            </li>
          </ol>
          <p>
            Fuente: <a href="https://epiweeks.readthedocs.io/">https://epiweeks.readthedocs.io/</a></p>
          <p>
            <strong>Formas de presentación de las enfermedades en la población</strong>:</p>
          <p>
            <strong>Brote</strong>: dos o más casos asociados epidemiológicamente entre sí. La existencia de un caso único bajo vigilancia en una zona donde no existía el padecimiento se considera también un brote. Un brote sucede por el aumento inusual del número de casos de una enfermedad más allá de lo normal, puede tener una diseminación localizada en un espacio específico (por ejemplo, una comunidad, un pueblo, un barco, una institución cerrada) o extenderse a varios países. Puede durar unos días, varias semanas o varios años.</p>
          <p>
            <strong>Epidemia</strong>: aumento del número de casos más allá de las variaciones habituales de presentación, con vinculación entre sí.</p>
          <p>
            <strong>Endemia</strong>: presencia continua de una enfermedad en una zona geográfica, con número de casos en un volumen significativo.</p>
          <p>
            <strong>Pandemia</strong>: epidemia que se ha extendido por varios países, continentes o todo el mundo y que, generalmente, afecta a un gran número de personas. Incidencia: Es el número de nuevos casos que aparecen de una patología determinada en un período de tiempo determinado y relacionado a la población expuesta durante el mismo período.</p>
          <p>
            <strong>Prevalencia</strong>: Es el número de casos de una enfermedad determinada en un momento determinado y relacionado a la población expuesta en ese momento. Mortalidad: número total de fallecidos en una comunidad determinada, durante un período de tiempo determinado.</p>
          <p>
            La fuente primaria para conocer las enfermedades y lesiones que causan la muerte de la población, evaluar la situación de salud en el país, vigilar el comportamiento de las enfermedades, desarrollar programas y planificar los servicios de salud con el objetivo de prevenir muertes prematuras o retrasar la aparición de complicaciones es el certificado de defunción (CD). El registro correcto de la causa de defunción es muy importante. El CD es un documento privado, obligatorio, que representa el testimonio escrito referente a un hecho clínico que el médico ha comprobado personalmente.<br />
            Las causas que se deben anotar en el CD se definen como:<br /><br />
            <strong>Causas de defunción</strong>: son todas aquellas enfermedades, estados morbosos o lesiones que produjeron la muerte o contribuyeron a ella, y las circunstancias del accidente o de la violencia que produjo dichas lesiones.<br /><br />
            <strong>Causa Básica de muerte (CBM)</strong>: es la enfermedad o lesión que inició la cadena de acontecimientos patológicos que llevó a la muerte, o bien las circunstancias del accidente o violencia que produjeron la lesión fatal.<br /><br />
            El médico puede considerar que una sola causa es suficiente para explicar la muerte.<br />
            Estadísticamente importa consignar la CBM. A posteriori de completado el CD se procede a la codificación, para la cual se utiliza la Clasificación Internacional de Enfermedades de la Organización Mundial de la Salud (OMS), (CIE) 10ª revisión.<br />
            Las principales causas de muerte pueden agruparse en los siguientes grupos:<br />
            
            Tumores (neoplasias) Códigos C00-D48<br />
            <ul>
              <li>Enfermedades del sistema circulatorio Códigos I00-I99</li>
              <li>Síntomas, signos y hallazgos anormales clínicos y de laboratorio, no clasificados en otra parte. Códigos R00-R99</li>
              <li>Enfermedades del sistema respiratorio Códigos J00- J99</li>
              <li>Causas externas de morbilidad y de mortalidad Códigos V01-Y98</li>
              <li>Resto de las causas.</li>
            </ul>
          </p>
          <p>En particular podría interesar:<br />
            Tumores malignos C00-C97<br />
            Enfermedades hipertensivas I10-I15<br />
            Cardiopatía isquémica I20-I25<br />
            Cerebrovasculares I60-I69<br />
            Accidentes de transporte V01-V99<br />
            Suicidios X60-X84<br />
            Observación: en marzo de 2020 la OMS proporcionó un documento acerca de los nuevos códigos para COVID-19.<br />
            Los códigos nuevos para COVID-19 son:<br />
            U07.1 COVID-19, virus identificado.<br />
            <ul>
              <li>Caso confirmado con resultado positivo de la prueba U07.2 COVID-19, virus no identificado</li>
              <li>Diagnosticado clínicamente y epidemiológicamente con COVID-19</li>
              <li>Caso probable de COVID-19</li>
              <li>Caso sospechoso de COVID-19</li>              
            </ul>
            Disponible en: <a href="https://www.paho.org/arg/index.php?option=com_docman&amp;view=download&amp;alias=468-covid-cie-codigos-2020-03-25-espanol&amp;category_slug=documentos&amp;Itemid=624#" class="uri">https://www.paho.org/arg/index.php?option=com_docman&amp;view=download&amp;alias=468-covid-cie-codigos-2020-03-25-espanol&amp;category_slug=documentos&amp;Itemid=624#</a><br />
            <br />
            <strong>Mortalidad proporcional</strong>: Expresa el porcentaje de defunciones por una causa o grupo de causas, en un lugar y período determinado, en relación al total de defunciones en el mismo lugar y período.<br />
            
            Fuente: <a href="https://www.murciasalud.es/pagina.php?id=147877&amp;idsec=3714&amp;expand=1" class="uri">https://www.murciasalud.es/pagina.php?id=147877&amp;idsec=3714&amp;expand=1</a><br />
            <br />
            <strong>Letalidad</strong>: número de fallecidos por una determinada enfermedad en relación al total de enfermos de esa misma enfermedad, en una comunidad determinada.<br />
            <br />
            <strong>Proporción</strong>: es un cociente en el que los elementos del numerador cumplen con alguna característica y en el denominador están todos los individuos, los que cumplen con la características de interés y los que no.<br />
            <br />
            <strong>Tasas</strong>: el concepto es similar al de proporción, excepto que las tasas incorporan tiempo. El numerador de una tasa está constituido por el total de casos con determinada característica. El denominador es la suma de los períodos de tiempo a los que han estado expuestos los sujetos susceptibles de la población de estudio. El cociente es multiplicado por una constante.<br />
            <br />
            <strong>Años de vida perdidos por muerte prematura (AVP)</strong>: es una estimación del promedio de años que una persona habría vivido si no hubiera muerto prematuramente. Es, por tanto, una medida de mortalidad prematura. Para calcular los AVP, se debe establecer una edad de referencia superior (en este trabajo se consideró la esperanza de vida al nacer del Instituto Nacional de Estadística, 78 años para 2020).
          </p>
      </div>
    </Layout>
  );
};

export default Graficas;
