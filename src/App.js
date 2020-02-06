import React from 'react'
import { Router } from '@reach/router'

import Layout from './components/layout'
import Home from './pages/Home'
import SpellListPage from './pages/spell-list'
import CreateSpellPage from './pages/create-spell'
import EditSpellPage from './pages/edit-spell'

const App = () => (
  <Router>
    <Home path="/" />
    <Layout path="spells">
      <SpellListPage path="/" />
      <CreateSpellPage path="create" />
      <EditSpellPage path="edit/:spellName" />
    </Layout>
  </Router>
)

export default App
