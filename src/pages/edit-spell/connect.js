import { connect } from 'react-redux'
import { selectSpellByName } from '../../redux/spells/selectors'

const mapStateToProps = (state, props) => ({
  spell: selectSpellByName(state, props)
})

export default connect(mapStateToProps)
