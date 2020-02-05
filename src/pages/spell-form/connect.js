import { connect } from 'react-redux'
import { createSpell } from '../../redux/spells'
import { selectAllSpellNames } from '../../redux/spells/selectors'

const mapStateToProps = state => ({
  allSpellNames: selectAllSpellNames(state)
})
const actionCreators = {
  createSpell
}

export default connect(mapStateToProps, actionCreators)
