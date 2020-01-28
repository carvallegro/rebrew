import React from 'react'
import { Router } from '@reach/router'

import Layout from './components/layout'
import Home from './pages/Home'
import SpellListPage from './pages/spell-list'

const App = () => (
  <Router>
    <Home path="/" />
    <Layout path="/*">
      <SpellListPage path="/spells" />
    </Layout>
  </Router>
)

export default App
