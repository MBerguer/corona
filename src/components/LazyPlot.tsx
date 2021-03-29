import React from 'react'
import {Plotly} from './Plotly'

export const LazyPlot = ({ layout, style, config, ...rest }) => {
  return (
    <Plotly
      {...rest}
      style={{ width: `100%`, ...style }}
    />
  )
}