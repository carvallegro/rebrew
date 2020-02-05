import React from 'react'
import { Router } from '@reach/router'

import Layout from './components/layout'
import Home from './pages/Home'
import SpellListPage from './pages/spell-list'
import SpellFormPage from './pages/spell-form'

const App = () => (
  <Router>
    <Home path="/" />
    <Layout path="spells">
      <SpellListPage path="/" />
      <SpellFormPage path="create" />
    </Layout>
  </Router>
)

export default App
