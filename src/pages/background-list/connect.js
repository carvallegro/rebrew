import { connect } from 'react-redux'
import { selectAllBackgrounds } from '../../redux/backgrounds/selectors'

const mapStateToProps = state => ({
  backgrounds: selectAllBackgrounds(state)
})

export default connect(mapStateToProps)
