import { css } from 'styled-components'

const reset = css`
  button,
  input,
  optgroup,
  select,
  textarea {
    font-family: inherit;
    font-size: 100%;
    margin: 0;
  }
  button,
  input {
    overflow: visible;
  }
  button,
  select {
    text-transform: none;
  }
  button,
  [type='button'],
  [type='reset'],
  [type='submit'] {
    -webkit-appearance: button;
  }
  button::-moz-focus-inner,
  [type='button']::-moz-focus-inner,
  [type='reset']::-moz-focus-inner,
  [type='submit']::-moz-focus-inner {
    border-style: none;
    padding: 0;
  }
  button:-moz-focusring,
  [type='button']:-moz-focusring,
  [type='reset']:-moz-focusring,
  [type='submit']:-moz-focusring {
    outline: 1px dotted ButtonText;
  }
  legend {
    box-sizing: border-box;
    color: inherit;
    display: table;
    max-width: 100%;
    padding: 0;
    white-space: normal;
  }
  progress {
    vertical-align: baseline;
  }
  textarea {
    overflow: auto;
  }
  [type='checkbox'],
  [type='radio'] {
    box-sizing: border-box;
    padding: 0;
  }
  [type='number']::-webkit-inner-spin-button,
  [type='number']::-webkit-outer-spin-button {
    height: auto;
  }
  [type='search'] {
    -webkit-appearance: textfield;
    outline-offset: -2px;
  }
  [type='search']::-webkit-search-decoration {
    -webkit-appearance: none;
  }
  ::-webkit-file-upload-button {
    -webkit-appearance: button;
    font: inherit;
  }
  hr {
    box-sizing: content-box;
    height: 0;
    overflow: visible;
  }
  a {
    background-color: transparent;
  }
  abbr[title] {
    border-bottom: none;
    text-decoration: underline;
    text-decoration: underline dotted;
  }
  b,
  strong {
    font-weight: bolder;
  }
  code,
  kbd,
  samp {
    font-family: monospace, monospace;
  }
  small {
    font-size: 80%;
  }
  sub,
  sup {
    font-size: 75%;
    line-height: 0;
    position: relative;
    vertical-align: baseline;
  }
  sub {
    bottom: -0.25em;
  }
  sup {
    top: -0.5em;
  }
  figure {
    margin: 0 0 1rem 0;
  }
  img {
    vertical-align: middle;
    border-style: none;
  }
  [role='button'] {
    cursor: pointer;
  }
  a,
  area,
  button,
  [role='button'],
  input,
  label,
  select,
  summary,
  textarea {
    touch-action: manipulation;
  }
  
  .st0{display:none;}
  .st1{display:inline;fill:#FFFFFF;}
  .st2{display:inline;}
  .st3{fill:#C8C8C8;}
  .st4{fill:#5796D1;}
  .st5{fill:none;stroke:#000000;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
  .st6{stroke:#000000;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
  .st7{fill:#FFFFFF;stroke:#000000;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
  .st8{fill:#FFFFFF;}
  
    .st9{display:inline;fill:#E1F9F7;stroke:#000000;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
  .st10{fill:#F2FCFC;stroke:#000000;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
  .st11{fill:#E1F9F7;stroke:#000000;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
  .st12{fill:#574943;stroke:#000000;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
  .st13{fill:#A4EDE6;stroke:#000000;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
  .st14{fill:#FFDD64;stroke:#000000;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
  .st15{fill:#FC3A52;stroke:#000000;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
  .st16{fill:#F2FCFC;stroke:#000000;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
  .st17{fill:#E1F9F7;stroke:#000000;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
  .st18{fill:#A4EDE6;stroke:#000000;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
  .st19{fill:#FFDD64;stroke:#000000;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
  .st20{fill:none;stroke:#000000;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
  .st21{fill:#FC3A52;stroke:#000000;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
  .st22{fill:none;stroke:#000000;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
  .st23{fill:#D6F4F0;stroke:#000000;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
  .st24{fill:#A4EDE6;stroke:#000000;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
  .st25{fill:#E1F9F7;stroke:#000000;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
  .st26{fill:#FC3A52;stroke:#000000;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
  .st27{fill:#BAEBE5;stroke:#000000;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
  .st28{fill:#FABEA3;stroke:#000000;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
  .st29{fill:#FFC8B3;stroke:#000000;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
  .st30{fill:#2A8FE7;stroke:#000000;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
  .st31{fill:#EEBE71;stroke:#000000;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
  .st32{display:inline;fill:none;stroke:#000000;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
  .st33{fill:#888888;stroke:#000000;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
  .st34{fill:#A3A3A3;stroke:#000000;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
  .st35{fill:#FFDD64;stroke:#000000;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
  .st36{fill:#FD7283;stroke:#000000;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
  .st37{fill:#F2FCFC;stroke:#000000;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
  .st38{fill:#333333;stroke:#000000;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
  .st39{fill:#F4FBFB;stroke:#000000;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
  .st40{fill:#838383;stroke:#000000;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
  .st41{fill:#CBF5F1;stroke:#000000;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
  
    .st42{display:inline;fill:#FFC8B3;stroke:#000000;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
  
    .st43{display:inline;fill:#2A8FE7;stroke:#000000;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
  .st44{fill:#FFC06D;stroke:#000000;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
  
    .st45{display:inline;fill:#F2FCFC;stroke:#000000;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
  .st46{fill:#FFDD64;}
  
    .st47{display:inline;fill:#D6F4F0;stroke:#000000;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
  
    .st48{display:inline;fill:#FC3A52;stroke:#000000;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
  
    .st49{display:inline;fill:#FD7283;stroke:#000000;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
  .st50{fill:#2A8FE7;}
  .st51{fill:#0080CE;}
  .st52{fill:#6E5043;}
  .st53{fill:#4C3F3A;}
  .st54{fill:#FC3A52;}
  .st55{fill:#E41F45;}
  .st56{fill:#FFB89C;}
  .st57{fill:#F4A38A;}
  .st58{fill:#FFC8B3;}
  .st59{fill:#A4EDE6;}
  .st60{fill:#86E0D5;}
  .st61{fill:#E9FBF8;}
  .st62{fill:#C6F4EE;}
  .st63{fill:#D60041;}
  .st64{fill:#FD6175;}
  .st65{fill:#006CBC;}
  .st66{fill:#838383;}
  .st67{fill:#707070;}
  .st68{fill:#666868;}
  .st69{fill:#FFA5B0;}
  .st70{fill:#FD7283;}
  .st71{fill:#E1F9F7;}
  .st72{fill:#B6F1EB;}
  .st73{fill:#F2FCFC;}
  .st74{fill:#6BD1C8;}
  .st75{fill:#D7F9F8;}
  .st76{fill:#BAEBE5;}
  .st77{fill:#F4C738;}
  .st78{fill:none;}
  .st79{fill:#806561;}
  
  iframe {
    width: 100%;
    height: 500px;
  }
`

export default reset
