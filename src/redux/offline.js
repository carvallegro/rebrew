import localforage from 'localforage'
import { useStore } from 'react-redux'
import watch from 'redux-watch'

import { selectAllSpellsWithoutSrd } from './spells/selectors'
import { useEffect, useState } from 'react'
import { restoreData } from './actions'

localforage.config({
  driver: [localforage.INDEXEDDB, localforage.LOCALSTORAGE],
  name: 'rebrew-bis',
  version: 1.0,
  size: 4980736,
  storeName: 'rebrew_offline_store',
  description: 'Store homebrew content for your Rebrew data.'
})

const saveItem = (item, value) => localforage.setItem(item, value)

const getItem = item => localforage.getItem(item)

const saveSpell = newVal =>
  saveItem('spells', selectAllSpellsWithoutSrd({ spells: newVal }))

export const setupStoreWatch = store => {
  store.subscribe(watch(store.getState, 'spells')(saveSpell))
  return store
}

export const restoreDataFromStorage = async () => ({
  spells: await getItem('spells')
})

export const useOfflineDataRestoration = () => {
  const store = useStore()
  const [hasDataLoaded, setDataLoaded] = useState(false)
  const [loadErrored, setLoadErrored] = useState(false)

  useEffect(() => {
    restoreDataFromStorage()
      .then(data => {
        store.dispatch(restoreData(data))
        setDataLoaded(true)
      })
      .catch(() => setLoadErrored(true))
  }, [setDataLoaded, setLoadErrored])

  return { hasDataLoaded, loadErrored }
}
