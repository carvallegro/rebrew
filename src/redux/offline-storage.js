import * as storage from 'redux-storage'
import localforage from 'localforage'
import createEngine from 'redux-storage-engine-localforage'

import { createSpell, deleteSpell } from './spells'

const localForageConfig = {
  driver: [localforage.WEBSQL, localforage.INDEXEDDB, localforage.LOCALSTORAGE],
  name: 'rebrew',
  version: 1.0,
  size: 4980736,
  storeName: 'rebrew_offline_store',
  description: 'Store homebrew content for your Rebrew data.'
}

const engine = createEngine('rebrew_offline_store', localForageConfig)
export const offlineMiddleware = storage.createMiddleware(
  engine,
  [],
  [`${createSpell}`, `${deleteSpell}`]
)

export const offlineReducerListener = storage.reducer

export const offlineLoad = storage.createLoader(engine)
