import React from 'react'
import {Plotly} from './Plotly'

export const LazyPlot = ({ config, style, ...rest }) => {
  return (
    <Plotly
      {...rest}
      style={{ width: `100%`, ...style }}
      config={{ locale: 'es' }}
    />
  )
}