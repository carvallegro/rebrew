import React, { Fragment } from 'react'
import { Router } from '@reach/router'

import Layout from './components/layout'
import Home from './pages/Home'
import SpellListPage from './pages/spell-list'
import CreateSpellPage from './pages/create-spell'
import EditSpellPage from './pages/edit-spell'
import ImportPage from './pages/import'

import { Alert } from 'bold-ui'
import { useOfflineDataRestoration } from './redux/offline'
import BackgroundListPage from './pages/background-list'

const App = () => {
  const { hasDataLoaded, loadErrored } = useOfflineDataRestoration()
  return (
    <Fragment>
      {loadErrored && <Alert type="warning">Local data failed to load.</Alert>}
      {hasDataLoaded && (
        <Router>
          <Home path="/" />
          <Layout path="backgrounds">
            <BackgroundListPage path="/" />
          </Layout>
          <Layout path="spells">
            <SpellListPage path="/" />
            <CreateSpellPage path="create" />
            <EditSpellPage path="edit/:spellName" />
            <ImportPage path="import" />
          </Layout>
        </Router>
      )}
    </Fragment>
  )
}

export default App
