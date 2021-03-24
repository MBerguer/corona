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
        <Category style={pageAnimation}>Causas de mortalidad global</Category>
        <animated.h1 style={titleAnimation}>
          Causas de muerte según grandes grupos
        </animated.h1>
      </PBox>
      <Content bg={"#fafafa"}>
        <PBox style={imagesAnimation} px={[6, 6, 8, 10]}>
          <iframe src="/graphs/causas/fig_9.html" />
        </PBox>
      </Content>

      <PBox py={[10, 5]} px={[6, 6, 8, 10]}>
        <animated.h1 style={titleAnimation}>
          Causas de muerte según grandes grupos
        </animated.h1>
      </PBox>
      <Content bg={"#fafafa"}>
        <PBox style={imagesAnimation} px={[6, 6, 8, 10]}>
          <iframe src="/graphs/causas/fig_10.html" />
        </PBox>
      </Content>

      <PBox py={[10, 5]} px={[6, 6, 8, 10]}>
        <animated.h1 style={titleAnimation}>
          Causas de muerte según grandes grupos (1)
        </animated.h1>
      </PBox>
      <Content bg={"#fafafa"}>
        <PBox style={imagesAnimation} px={[6, 6, 8, 10]}>
          <iframe src="/graphs/causas/fig_11.html" />
        </PBox>
      </Content>

      <PBox py={[10, 5]} px={[6, 6, 8, 10]}>
        <animated.h1 style={titleAnimation}>
          Causas de muerte según grandes grupos (2)
        </animated.h1>
      </PBox>
      <Content bg={"#fafafa"}>
        <PBox style={imagesAnimation} px={[6, 6, 8, 10]}>
          <iframe src="/graphs/causas/fig_11_2.html" />
        </PBox>
      </Content>
      <PBox style={imagesAnimation} px={[6, 6, 8, 10]}>

      <table className="table table-condensed">
        <thead>
          <tr className="header">
            <th align="left">Sexo</th>
            <th align="right">Edad</th>
            <th align="right">totales</th>
          </tr>
        </thead>
        <tbody>
          <tr className="odd">
            <td align="left">Femenino</td>
            <td align="right">0</td>
            <td align="right">357</td>
          </tr>
          <tr className="even">
            <td align="left">Femenino</td>
            <td align="right">1</td>
            <td align="right">31</td>
          </tr>
          <tr className="odd">
            <td align="left">Femenino</td>
            <td align="right">2</td>
            <td align="right">24</td>
          </tr>
          <tr className="even">
            <td align="left">Femenino</td>
            <td align="right">3</td>
            <td align="right">14</td>
          </tr>
          <tr className="odd">
            <td align="left">Femenino</td>
            <td align="right">4</td>
            <td align="right">13</td>
          </tr>
          <tr className="even">
            <td align="left">Femenino</td>
            <td align="right">5</td>
            <td align="right">9</td>
          </tr>
          <tr className="odd">
            <td align="left">Femenino</td>
            <td align="right">6</td>
            <td align="right">13</td>
          </tr>
          <tr className="even">
            <td align="left">Femenino</td>
            <td align="right">7</td>
            <td align="right">11</td>
          </tr>
          <tr className="odd">
            <td align="left">Femenino</td>
            <td align="right">8</td>
            <td align="right">12</td>
          </tr>
          <tr className="even">
            <td align="left">Femenino</td>
            <td align="right">9</td>
            <td align="right">7</td>
          </tr>
          <tr className="odd">
            <td align="left">Femenino</td>
            <td align="right">10</td>
            <td align="right">11</td>
          </tr>
          <tr className="even">
            <td align="left">Femenino</td>
            <td align="right">11</td>
            <td align="right">11</td>
          </tr>
          <tr className="odd">
            <td align="left">Femenino</td>
            <td align="right">12</td>
            <td align="right">11</td>
          </tr>
          <tr className="even">
            <td align="left">Femenino</td>
            <td align="right">13</td>
            <td align="right">11</td>
          </tr>
          <tr className="odd">
            <td align="left">Femenino</td>
            <td align="right">14</td>
            <td align="right">15</td>
          </tr>
          <tr className="even">
            <td align="left">Femenino</td>
            <td align="right">15</td>
            <td align="right">24</td>
          </tr>
          <tr className="odd">
            <td align="left">Femenino</td>
            <td align="right">16</td>
            <td align="right">16</td>
          </tr>
          <tr className="even">
            <td align="left">Femenino</td>
            <td align="right">17</td>
            <td align="right">28</td>
          </tr>
          <tr className="odd">
            <td align="left">Femenino</td>
            <td align="right">18</td>
            <td align="right">21</td>
          </tr>
          <tr className="even">
            <td align="left">Femenino</td>
            <td align="right">19</td>
            <td align="right">36</td>
          </tr>
          <tr className="odd">
            <td align="left">Femenino</td>
            <td align="right">20</td>
            <td align="right">46</td>
          </tr>
          <tr className="even">
            <td align="left">Femenino</td>
            <td align="right">21</td>
            <td align="right">36</td>
          </tr>
          <tr className="odd">
            <td align="left">Femenino</td>
            <td align="right">22</td>
            <td align="right">34</td>
          </tr>
          <tr className="even">
            <td align="left">Femenino</td>
            <td align="right">23</td>
            <td align="right">29</td>
          </tr>
          <tr className="odd">
            <td align="left">Femenino</td>
            <td align="right">24</td>
            <td align="right">41</td>
          </tr>
          <tr className="even">
            <td align="left">Femenino</td>
            <td align="right">25</td>
            <td align="right">33</td>
          </tr>
          <tr className="odd">
            <td align="left">Femenino</td>
            <td align="right">26</td>
            <td align="right">45</td>
          </tr>
          <tr className="even">
            <td align="left">Femenino</td>
            <td align="right">27</td>
            <td align="right">39</td>
          </tr>
          <tr className="odd">
            <td align="left">Femenino</td>
            <td align="right">28</td>
            <td align="right">42</td>
          </tr>
          <tr className="even">
            <td align="left">Femenino</td>
            <td align="right">29</td>
            <td align="right">43</td>
          </tr>
          <tr className="odd">
            <td align="left">Femenino</td>
            <td align="right">30</td>
            <td align="right">47</td>
          </tr>
          <tr className="even">
            <td align="left">Femenino</td>
            <td align="right">31</td>
            <td align="right">48</td>
          </tr>
          <tr className="odd">
            <td align="left">Femenino</td>
            <td align="right">32</td>
            <td align="right">55</td>
          </tr>
          <tr className="even">
            <td align="left">Femenino</td>
            <td align="right">33</td>
            <td align="right">62</td>
          </tr>
          <tr className="odd">
            <td align="left">Femenino</td>
            <td align="right">34</td>
            <td align="right">53</td>
          </tr>
          <tr className="even">
            <td align="left">Femenino</td>
            <td align="right">35</td>
            <td align="right">63</td>
          </tr>
          <tr className="odd">
            <td align="left">Femenino</td>
            <td align="right">36</td>
            <td align="right">83</td>
          </tr>
          <tr className="even">
            <td align="left">Femenino</td>
            <td align="right">37</td>
            <td align="right">60</td>
          </tr>
          <tr className="odd">
            <td align="left">Femenino</td>
            <td align="right">38</td>
            <td align="right">78</td>
          </tr>
          <tr className="even">
            <td align="left">Femenino</td>
            <td align="right">39</td>
            <td align="right">104</td>
          </tr>
          <tr className="odd">
            <td align="left">Femenino</td>
            <td align="right">40</td>
            <td align="right">95</td>
          </tr>
          <tr className="even">
            <td align="left">Femenino</td>
            <td align="right">41</td>
            <td align="right">122</td>
          </tr>
          <tr className="odd">
            <td align="left">Femenino</td>
            <td align="right">42</td>
            <td align="right">127</td>
          </tr>
          <tr className="even">
            <td align="left">Femenino</td>
            <td align="right">43</td>
            <td align="right">107</td>
          </tr>
          <tr className="odd">
            <td align="left">Femenino</td>
            <td align="right">44</td>
            <td align="right">139</td>
          </tr>
          <tr className="even">
            <td align="left">Femenino</td>
            <td align="right">45</td>
            <td align="right">136</td>
          </tr>
          <tr className="odd">
            <td align="left">Femenino</td>
            <td align="right">46</td>
            <td align="right">135</td>
          </tr>
          <tr className="even">
            <td align="left">Femenino</td>
            <td align="right">47</td>
            <td align="right">151</td>
          </tr>
          <tr className="odd">
            <td align="left">Femenino</td>
            <td align="right">48</td>
            <td align="right">156</td>
          </tr>
          <tr className="even">
            <td align="left">Femenino</td>
            <td align="right">49</td>
            <td align="right">159</td>
          </tr>
          <tr className="odd">
            <td align="left">Femenino</td>
            <td align="right">50</td>
            <td align="right">175</td>
          </tr>
          <tr className="even">
            <td align="left">Femenino</td>
            <td align="right">51</td>
            <td align="right">183</td>
          </tr>
          <tr className="odd">
            <td align="left">Femenino</td>
            <td align="right">52</td>
            <td align="right">221</td>
          </tr>
          <tr className="even">
            <td align="left">Femenino</td>
            <td align="right">53</td>
            <td align="right">239</td>
          </tr>
          <tr className="odd">
            <td align="left">Femenino</td>
            <td align="right">54</td>
            <td align="right">270</td>
          </tr>
          <tr className="even">
            <td align="left">Femenino</td>
            <td align="right">55</td>
            <td align="right">298</td>
          </tr>
          <tr className="odd">
            <td align="left">Femenino</td>
            <td align="right">56</td>
            <td align="right">293</td>
          </tr>
          <tr className="even">
            <td align="left">Femenino</td>
            <td align="right">57</td>
            <td align="right">349</td>
          </tr>
          <tr className="odd">
            <td align="left">Femenino</td>
            <td align="right">58</td>
            <td align="right">344</td>
          </tr>
          <tr className="even">
            <td align="left">Femenino</td>
            <td align="right">59</td>
            <td align="right">381</td>
          </tr>
          <tr className="odd">
            <td align="left">Femenino</td>
            <td align="right">60</td>
            <td align="right">426</td>
          </tr>
          <tr className="even">
            <td align="left">Femenino</td>
            <td align="right">61</td>
            <td align="right">463</td>
          </tr>
          <tr className="odd">
            <td align="left">Femenino</td>
            <td align="right">62</td>
            <td align="right">498</td>
          </tr>
          <tr className="even">
            <td align="left">Femenino</td>
            <td align="right">63</td>
            <td align="right">520</td>
          </tr>
          <tr className="odd">
            <td align="left">Femenino</td>
            <td align="right">64</td>
            <td align="right">513</td>
          </tr>
          <tr className="even">
            <td align="left">Femenino</td>
            <td align="right">65</td>
            <td align="right">543</td>
          </tr>
          <tr className="odd">
            <td align="left">Femenino</td>
            <td align="right">66</td>
            <td align="right">613</td>
          </tr>
          <tr className="even">
            <td align="left">Femenino</td>
            <td align="right">67</td>
            <td align="right">624</td>
          </tr>
          <tr className="odd">
            <td align="left">Femenino</td>
            <td align="right">68</td>
            <td align="right">672</td>
          </tr>
          <tr className="even">
            <td align="left">Femenino</td>
            <td align="right">69</td>
            <td align="right">682</td>
          </tr>
          <tr className="odd">
            <td align="left">Femenino</td>
            <td align="right">70</td>
            <td align="right">717</td>
          </tr>
          <tr className="even">
            <td align="left">Femenino</td>
            <td align="right">71</td>
            <td align="right">817</td>
          </tr>
          <tr className="odd">
            <td align="left">Femenino</td>
            <td align="right">72</td>
            <td align="right">860</td>
          </tr>
          <tr className="even">
            <td align="left">Femenino</td>
            <td align="right">73</td>
            <td align="right">943</td>
          </tr>
          <tr className="odd">
            <td align="left">Femenino</td>
            <td align="right">74</td>
            <td align="right">944</td>
          </tr>
          <tr className="even">
            <td align="left">Femenino</td>
            <td align="right">75</td>
            <td align="right">946</td>
          </tr>
          <tr className="odd">
            <td align="left">Femenino</td>
            <td align="right">76</td>
            <td align="right">1087</td>
          </tr>
          <tr className="even">
            <td align="left">Femenino</td>
            <td align="right">77</td>
            <td align="right">1163</td>
          </tr>
          <tr className="odd">
            <td align="left">Femenino</td>
            <td align="right">78</td>
            <td align="right">1172</td>
          </tr>
          <tr className="even">
            <td align="left">Femenino</td>
            <td align="right">79</td>
            <td align="right">1312</td>
          </tr>
          <tr className="odd">
            <td align="left">Femenino</td>
            <td align="right">80</td>
            <td align="right">1381</td>
          </tr>
          <tr className="even">
            <td align="left">Femenino</td>
            <td align="right">81</td>
            <td align="right">1434</td>
          </tr>
          <tr className="odd">
            <td align="left">Femenino</td>
            <td align="right">82</td>
            <td align="right">1590</td>
          </tr>
          <tr className="even">
            <td align="left">Femenino</td>
            <td align="right">83</td>
            <td align="right">1745</td>
          </tr>
          <tr className="odd">
            <td align="left">Femenino</td>
            <td align="right">84</td>
            <td align="right">1824</td>
          </tr>
          <tr className="even">
            <td align="left">Femenino</td>
            <td align="right">85</td>
            <td align="right">1880</td>
          </tr>
          <tr className="odd">
            <td align="left">Femenino</td>
            <td align="right">86</td>
            <td align="right">2002</td>
          </tr>
          <tr className="even">
            <td align="left">Femenino</td>
            <td align="right">87</td>
            <td align="right">1932</td>
          </tr>
          <tr className="odd">
            <td align="left">Femenino</td>
            <td align="right">88</td>
            <td align="right">2026</td>
          </tr>
          <tr className="even">
            <td align="left">Femenino</td>
            <td align="right">89</td>
            <td align="right">1915</td>
          </tr>
          <tr className="odd">
            <td align="left">Femenino</td>
            <td align="right">90</td>
            <td align="right">1847</td>
          </tr>
          <tr className="even">
            <td align="left">Femenino</td>
            <td align="right">91</td>
            <td align="right">1657</td>
          </tr>
          <tr className="odd">
            <td align="left">Femenino</td>
            <td align="right">92</td>
            <td align="right">1587</td>
          </tr>
          <tr className="even">
            <td align="left">Femenino</td>
            <td align="right">93</td>
            <td align="right">1350</td>
          </tr>
          <tr className="odd">
            <td align="left">Femenino</td>
            <td align="right">94</td>
            <td align="right">1143</td>
          </tr>
          <tr className="even">
            <td align="left">Femenino</td>
            <td align="right">95</td>
            <td align="right">918</td>
          </tr>
          <tr className="odd">
            <td align="left">Femenino</td>
            <td align="right">96</td>
            <td align="right">825</td>
          </tr>
          <tr className="even">
            <td align="left">Femenino</td>
            <td align="right">97</td>
            <td align="right">628</td>
          </tr>
          <tr className="odd">
            <td align="left">Femenino</td>
            <td align="right">98</td>
            <td align="right">454</td>
          </tr>
          <tr className="even">
            <td align="left">Femenino</td>
            <td align="right">99</td>
            <td align="right">312</td>
          </tr>
          <tr className="odd">
            <td align="left">Femenino</td>
            <td align="right">100</td>
            <td align="right">249</td>
          </tr>
          <tr className="even">
            <td align="left">Femenino</td>
            <td align="right">101</td>
            <td align="right">192</td>
          </tr>
          <tr className="odd">
            <td align="left">Femenino</td>
            <td align="right">102</td>
            <td align="right">116</td>
          </tr>
          <tr className="even">
            <td align="left">Femenino</td>
            <td align="right">103</td>
            <td align="right">72</td>
          </tr>
          <tr className="odd">
            <td align="left">Femenino</td>
            <td align="right">104</td>
            <td align="right">54</td>
          </tr>
          <tr className="even">
            <td align="left">Femenino</td>
            <td align="right">105</td>
            <td align="right">32</td>
          </tr>
          <tr className="odd">
            <td align="left">Femenino</td>
            <td align="right">106</td>
            <td align="right">13</td>
          </tr>
          <tr className="even">
            <td align="left">Femenino</td>
            <td align="right">107</td>
            <td align="right">6</td>
          </tr>
          <tr className="odd">
            <td align="left">Femenino</td>
            <td align="right">108</td>
            <td align="right">8</td>
          </tr>
          <tr className="even">
            <td align="left">Femenino</td>
            <td align="right">109</td>
            <td align="right">7</td>
          </tr>
          <tr className="odd">
            <td align="left">Femenino</td>
            <td align="right">112</td>
            <td align="right">1</td>
          </tr>
          <tr className="even">
            <td align="left">Femenino</td>
            <td align="right">118</td>
            <td align="right">2</td>
          </tr>
          <tr className="odd">
            <td align="left">Femenino</td>
            <td align="right">119</td>
            <td align="right">1</td>
          </tr>
          <tr className="even">
            <td align="left">Femenino</td>
            <td align="right">NA</td>
            <td align="right">52</td>
          </tr>
          <tr className="odd">
            <td align="left">Masculino</td>
            <td align="right">0</td>
            <td align="right">445</td>
          </tr>
          <tr className="even">
            <td align="left">Masculino</td>
            <td align="right">1</td>
            <td align="right">43</td>
          </tr>
          <tr className="odd">
            <td align="left">Masculino</td>
            <td align="right">2</td>
            <td align="right">28</td>
          </tr>
          <tr className="even">
            <td align="left">Masculino</td>
            <td align="right">3</td>
            <td align="right">19</td>
          </tr>
          <tr className="odd">
            <td align="left">Masculino</td>
            <td align="right">4</td>
            <td align="right">12</td>
          </tr>
          <tr className="even">
            <td align="left">Masculino</td>
            <td align="right">5</td>
            <td align="right">9</td>
          </tr>
          <tr className="odd">
            <td align="left">Masculino</td>
            <td align="right">6</td>
            <td align="right">10</td>
          </tr>
          <tr className="even">
            <td align="left">Masculino</td>
            <td align="right">7</td>
            <td align="right">9</td>
          </tr>
          <tr className="odd">
            <td align="left">Masculino</td>
            <td align="right">8</td>
            <td align="right">14</td>
          </tr>
          <tr className="even">
            <td align="left">Masculino</td>
            <td align="right">9</td>
            <td align="right">7</td>
          </tr>
          <tr className="odd">
            <td align="left">Masculino</td>
            <td align="right">10</td>
            <td align="right">11</td>
          </tr>
          <tr className="even">
            <td align="left">Masculino</td>
            <td align="right">11</td>
            <td align="right">13</td>
          </tr>
          <tr className="odd">
            <td align="left">Masculino</td>
            <td align="right">12</td>
            <td align="right">20</td>
          </tr>
          <tr className="even">
            <td align="left">Masculino</td>
            <td align="right">13</td>
            <td align="right">20</td>
          </tr>
          <tr className="odd">
            <td align="left">Masculino</td>
            <td align="right">14</td>
            <td align="right">21</td>
          </tr>
          <tr className="even">
            <td align="left">Masculino</td>
            <td align="right">15</td>
            <td align="right">45</td>
          </tr>
          <tr className="odd">
            <td align="left">Masculino</td>
            <td align="right">16</td>
            <td align="right">61</td>
          </tr>
          <tr className="even">
            <td align="left">Masculino</td>
            <td align="right">17</td>
            <td align="right">94</td>
          </tr>
          <tr className="odd">
            <td align="left">Masculino</td>
            <td align="right">18</td>
            <td align="right">100</td>
          </tr>
          <tr className="even">
            <td align="left">Masculino</td>
            <td align="right">19</td>
            <td align="right">130</td>
          </tr>
          <tr className="odd">
            <td align="left">Masculino</td>
            <td align="right">20</td>
            <td align="right">142</td>
          </tr>
          <tr className="even">
            <td align="left">Masculino</td>
            <td align="right">21</td>
            <td align="right">147</td>
          </tr>
          <tr className="odd">
            <td align="left">Masculino</td>
            <td align="right">22</td>
            <td align="right">133</td>
          </tr>
          <tr className="even">
            <td align="left">Masculino</td>
            <td align="right">23</td>
            <td align="right">150</td>
          </tr>
          <tr className="odd">
            <td align="left">Masculino</td>
            <td align="right">24</td>
            <td align="right">129</td>
          </tr>
          <tr className="even">
            <td align="left">Masculino</td>
            <td align="right">25</td>
            <td align="right">147</td>
          </tr>
          <tr className="odd">
            <td align="left">Masculino</td>
            <td align="right">26</td>
            <td align="right">116</td>
          </tr>
          <tr className="even">
            <td align="left">Masculino</td>
            <td align="right">27</td>
            <td align="right">105</td>
          </tr>
          <tr className="odd">
            <td align="left">Masculino</td>
            <td align="right">28</td>
            <td align="right">117</td>
          </tr>
          <tr className="even">
            <td align="left">Masculino</td>
            <td align="right">29</td>
            <td align="right">117</td>
          </tr>
          <tr className="odd">
            <td align="left">Masculino</td>
            <td align="right">30</td>
            <td align="right">140</td>
          </tr>
          <tr className="even">
            <td align="left">Masculino</td>
            <td align="right">31</td>
            <td align="right">101</td>
          </tr>
          <tr className="odd">
            <td align="left">Masculino</td>
            <td align="right">32</td>
            <td align="right">126</td>
          </tr>
          <tr className="even">
            <td align="left">Masculino</td>
            <td align="right">33</td>
            <td align="right">127</td>
          </tr>
          <tr className="odd">
            <td align="left">Masculino</td>
            <td align="right">34</td>
            <td align="right">119</td>
          </tr>
          <tr className="even">
            <td align="left">Masculino</td>
            <td align="right">35</td>
            <td align="right">149</td>
          </tr>
          <tr className="odd">
            <td align="left">Masculino</td>
            <td align="right">36</td>
            <td align="right">148</td>
          </tr>
          <tr className="even">
            <td align="left">Masculino</td>
            <td align="right">37</td>
            <td align="right">172</td>
          </tr>
          <tr className="odd">
            <td align="left">Masculino</td>
            <td align="right">38</td>
            <td align="right">142</td>
          </tr>
          <tr className="even">
            <td align="left">Masculino</td>
            <td align="right">39</td>
            <td align="right">157</td>
          </tr>
          <tr className="odd">
            <td align="left">Masculino</td>
            <td align="right">40</td>
            <td align="right">163</td>
          </tr>
          <tr className="even">
            <td align="left">Masculino</td>
            <td align="right">41</td>
            <td align="right">168</td>
          </tr>
          <tr className="odd">
            <td align="left">Masculino</td>
            <td align="right">42</td>
            <td align="right">201</td>
          </tr>
          <tr className="even">
            <td align="left">Masculino</td>
            <td align="right">43</td>
            <td align="right">183</td>
          </tr>
          <tr className="odd">
            <td align="left">Masculino</td>
            <td align="right">44</td>
            <td align="right">194</td>
          </tr>
          <tr className="even">
            <td align="left">Masculino</td>
            <td align="right">45</td>
            <td align="right">199</td>
          </tr>
          <tr className="odd">
            <td align="left">Masculino</td>
            <td align="right">46</td>
            <td align="right">235</td>
          </tr>
          <tr className="even">
            <td align="left">Masculino</td>
            <td align="right">47</td>
            <td align="right">208</td>
          </tr>
          <tr className="odd">
            <td align="left">Masculino</td>
            <td align="right">48</td>
            <td align="right">260</td>
          </tr>
          <tr className="even">
            <td align="left">Masculino</td>
            <td align="right">49</td>
            <td align="right">244</td>
          </tr>
          <tr className="odd">
            <td align="left">Masculino</td>
            <td align="right">50</td>
            <td align="right">274</td>
          </tr>
          <tr className="even">
            <td align="left">Masculino</td>
            <td align="right">51</td>
            <td align="right">291</td>
          </tr>
          <tr className="odd">
            <td align="left">Masculino</td>
            <td align="right">52</td>
            <td align="right">332</td>
          </tr>
          <tr className="even">
            <td align="left">Masculino</td>
            <td align="right">53</td>
            <td align="right">397</td>
          </tr>
          <tr className="odd">
            <td align="left">Masculino</td>
            <td align="right">54</td>
            <td align="right">471</td>
          </tr>
          <tr className="even">
            <td align="left">Masculino</td>
            <td align="right">55</td>
            <td align="right">460</td>
          </tr>
          <tr className="odd">
            <td align="left">Masculino</td>
            <td align="right">56</td>
            <td align="right">524</td>
          </tr>
          <tr className="even">
            <td align="left">Masculino</td>
            <td align="right">57</td>
            <td align="right">561</td>
          </tr>
          <tr className="odd">
            <td align="left">Masculino</td>
            <td align="right">58</td>
            <td align="right">637</td>
          </tr>
          <tr className="even">
            <td align="left">Masculino</td>
            <td align="right">59</td>
            <td align="right">685</td>
          </tr>
          <tr className="odd">
            <td align="left">Masculino</td>
            <td align="right">60</td>
            <td align="right">697</td>
          </tr>
          <tr className="even">
            <td align="left">Masculino</td>
            <td align="right">61</td>
            <td align="right">770</td>
          </tr>
          <tr className="odd">
            <td align="left">Masculino</td>
            <td align="right">62</td>
            <td align="right">845</td>
          </tr>
          <tr className="even">
            <td align="left">Masculino</td>
            <td align="right">63</td>
            <td align="right">879</td>
          </tr>
          <tr className="odd">
            <td align="left">Masculino</td>
            <td align="right">64</td>
            <td align="right">876</td>
          </tr>
          <tr className="even">
            <td align="left">Masculino</td>
            <td align="right">65</td>
            <td align="right">923</td>
          </tr>
          <tr className="odd">
            <td align="left">Masculino</td>
            <td align="right">66</td>
            <td align="right">1045</td>
          </tr>
          <tr className="even">
            <td align="left">Masculino</td>
            <td align="right">67</td>
            <td align="right">1033</td>
          </tr>
          <tr className="odd">
            <td align="left">Masculino</td>
            <td align="right">68</td>
            <td align="right">1084</td>
          </tr>
          <tr className="even">
            <td align="left">Masculino</td>
            <td align="right">69</td>
            <td align="right">1108</td>
          </tr>
          <tr className="odd">
            <td align="left">Masculino</td>
            <td align="right">70</td>
            <td align="right">1203</td>
          </tr>
          <tr className="even">
            <td align="left">Masculino</td>
            <td align="right">71</td>
            <td align="right">1181</td>
          </tr>
          <tr className="odd">
            <td align="left">Masculino</td>
            <td align="right">72</td>
            <td align="right">1265</td>
          </tr>
          <tr className="even">
            <td align="left">Masculino</td>
            <td align="right">73</td>
            <td align="right">1301</td>
          </tr>
          <tr className="odd">
            <td align="left">Masculino</td>
            <td align="right">74</td>
            <td align="right">1316</td>
          </tr>
          <tr className="even">
            <td align="left">Masculino</td>
            <td align="right">75</td>
            <td align="right">1342</td>
          </tr>
          <tr className="odd">
            <td align="left">Masculino</td>
            <td align="right">76</td>
            <td align="right">1310</td>
          </tr>
          <tr className="even">
            <td align="left">Masculino</td>
            <td align="right">77</td>
            <td align="right">1413</td>
          </tr>
          <tr className="odd">
            <td align="left">Masculino</td>
            <td align="right">78</td>
            <td align="right">1428</td>
          </tr>
          <tr className="even">
            <td align="left">Masculino</td>
            <td align="right">79</td>
            <td align="right">1418</td>
          </tr>
          <tr className="odd">
            <td align="left">Masculino</td>
            <td align="right">80</td>
            <td align="right">1426</td>
          </tr>
          <tr className="even">
            <td align="left">Masculino</td>
            <td align="right">81</td>
            <td align="right">1443</td>
          </tr>
          <tr className="odd">
            <td align="left">Masculino</td>
            <td align="right">82</td>
            <td align="right">1452</td>
          </tr>
          <tr className="even">
            <td align="left">Masculino</td>
            <td align="right">83</td>
            <td align="right">1470</td>
          </tr>
          <tr className="odd">
            <td align="left">Masculino</td>
            <td align="right">84</td>
            <td align="right">1424</td>
          </tr>
          <tr className="even">
            <td align="left">Masculino</td>
            <td align="right">85</td>
            <td align="right">1401</td>
          </tr>
          <tr className="odd">
            <td align="left">Masculino</td>
            <td align="right">86</td>
            <td align="right">1313</td>
          </tr>
          <tr className="even">
            <td align="left">Masculino</td>
            <td align="right">87</td>
            <td align="right">1369</td>
          </tr>
          <tr className="odd">
            <td align="left">Masculino</td>
            <td align="right">88</td>
            <td align="right">1193</td>
          </tr>
          <tr className="even">
            <td align="left">Masculino</td>
            <td align="right">89</td>
            <td align="right">1082</td>
          </tr>
          <tr className="odd">
            <td align="left">Masculino</td>
            <td align="right">90</td>
            <td align="right">974</td>
          </tr>
          <tr className="even">
            <td align="left">Masculino</td>
            <td align="right">91</td>
            <td align="right">860</td>
          </tr>
          <tr className="odd">
            <td align="left">Masculino</td>
            <td align="right">92</td>
            <td align="right">721</td>
          </tr>
          <tr className="even">
            <td align="left">Masculino</td>
            <td align="right">93</td>
            <td align="right">548</td>
          </tr>
          <tr className="odd">
            <td align="left">Masculino</td>
            <td align="right">94</td>
            <td align="right">464</td>
          </tr>
          <tr className="even">
            <td align="left">Masculino</td>
            <td align="right">95</td>
            <td align="right">360</td>
          </tr>
          <tr className="odd">
            <td align="left">Masculino</td>
            <td align="right">96</td>
            <td align="right">267</td>
          </tr>
          <tr className="even">
            <td align="left">Masculino</td>
            <td align="right">97</td>
            <td align="right">187</td>
          </tr>
          <tr className="odd">
            <td align="left">Masculino</td>
            <td align="right">98</td>
            <td align="right">114</td>
          </tr>
          <tr className="even">
            <td align="left">Masculino</td>
            <td align="right">99</td>
            <td align="right">86</td>
          </tr>
          <tr className="odd">
            <td align="left">Masculino</td>
            <td align="right">100</td>
            <td align="right">68</td>
          </tr>
          <tr className="even">
            <td align="left">Masculino</td>
            <td align="right">101</td>
            <td align="right">25</td>
          </tr>
          <tr className="odd">
            <td align="left">Masculino</td>
            <td align="right">102</td>
            <td align="right">15</td>
          </tr>
          <tr className="even">
            <td align="left">Masculino</td>
            <td align="right">103</td>
            <td align="right">20</td>
          </tr>
          <tr className="odd">
            <td align="left">Masculino</td>
            <td align="right">104</td>
            <td align="right">11</td>
          </tr>
          <tr className="even">
            <td align="left">Masculino</td>
            <td align="right">105</td>
            <td align="right">4</td>
          </tr>
          <tr className="odd">
            <td align="left">Masculino</td>
            <td align="right">106</td>
            <td align="right">3</td>
          </tr>
          <tr className="even">
            <td align="left">Masculino</td>
            <td align="right">107</td>
            <td align="right">2</td>
          </tr>
          <tr className="odd">
            <td align="left">Masculino</td>
            <td align="right">116</td>
            <td align="right">2</td>
          </tr>
          <tr className="even">
            <td align="left">Masculino</td>
            <td align="right">117</td>
            <td align="right">1</td>
          </tr>
          <tr className="odd">
            <td align="left">Masculino</td>
            <td align="right">NA</td>
            <td align="right">61</td>
          </tr>
        </tbody>
      </table>
      </PBox>

    </Layout>
  );
};

export default Graficas;
