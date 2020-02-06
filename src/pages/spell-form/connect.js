import { connect } from 'react-redux'
import { saveSpell } from '../../redux/spells'
import { selectAllSpellNames } from '../../redux/spells/selectors'

const mapStateToProps = state => ({
  allSpellNames: selectAllSpellNames(state)
})

const actionCreators = {
  onSave: saveSpell,
  saveSpell
}

export default connect(mapStateToProps, actionCreators)
