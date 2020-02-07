import store from './createStore'
import { restoreDataFromStorage, setupStoreWatch } from './offline'
import { restoreData } from './actions'

const restore = async () => {
  const data = await restoreDataFromStorage()
  store.dispatch(restoreData(data))
}

restore()
  .then(() => console.log('DATA RESTORED'))
  .catch(() => console.error('RESTORATION FAILED'))

export default setupStoreWatch(store)
