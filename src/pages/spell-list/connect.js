import { connect } from 'react-redux'
import { selectAllSpells } from '../../redux/spells/selectors'

const mapStateToProps = state => ({
  spells: selectAllSpells(state)
})

export default connect(mapStateToProps)
