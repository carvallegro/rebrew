import * as R from 'ramda'

export const selectAllBackgrounds = R.pathOr([], ['backgrounds'])
