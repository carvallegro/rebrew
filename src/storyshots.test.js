import initStoryshots, {
  snapshotWithOptions
} from '@storybook/addon-storyshots'

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
