import React from 'react'
import { Router } from '@reach/router'

import { Home } from './pages/Home'
import Layout from './components/layout'

const App = () => (
  <Router>
    <Home path="/" />
    <Layout path="/*" />
  </Router>
)

export default App
