import { connect } from 'react-redux'
import { createSpell } from '../../redux/spells'

const actionCreators = {
  createSpell
}

export default connect(null, actionCreators)
