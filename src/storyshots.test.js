import initStoryshots, {
  snapshotWithOptions
} from '@storybook/addon-storyshots'
import { Dropdown } from 'bold-ui'

initStoryshots({
  test: snapshotWithOptions(story => ({
    createNodeMock: element => {
      // element.setAttribute = jest.fn()
      // element.removeAttribute = jest.fn()
      // return element
      return document.createElement('div')
    }
  }))
})
