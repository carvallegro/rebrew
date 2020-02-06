import { connect } from 'react-redux'
import { deleteSpell } from '../../redux/spells'

const actionCreators = {
  onDelete: deleteSpell
}

export default connect(null, actionCreators)
