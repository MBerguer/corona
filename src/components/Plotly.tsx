import React from 'react'
import Loadable from 'react-loadable'
import { FoldingSpinner } from './Spinners/FoldingSpinner'
export const Plotly = Loadable({
  loader: () => import(`react-plotly.js`),
  loading: ({ timedOut }) =>
    timedOut ? (
      <blockquote>Error: Loading Plotly timed out.</blockquote>
    ) : (
      <FoldingSpinner />
    ),
  timeout: 10000,
})
