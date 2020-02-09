import { connect } from 'react-redux'
import { importSpells } from '../../redux/spells'

const actionCreators = {
  importSpells
}

export default connect(null, actionCreators)
