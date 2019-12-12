import React from 'react'
import PropTypes from 'prop-types'

const Heading = ({h, children}) => {
    switch(h) {
        default:
        case 1: return <h1 className="t-heading-1">{children}</h1>
        case 2: return <h2 className="t-heading-2">{children}</h2>
        case 3: return <h3 className="t-heading-3">{children}</h3>
        case 4: return <h4 className="t-heading-4">{children}</h4>
        case 5: return <h5 className="t-heading-5">{children}</h5>
        case 6: return <h6 className="t-heading-6">{children}</h6>
    }
}

Heading.propTypes = {
    h: PropTypes.oneOf([1,2,3,4,5,6]),
    children: PropTypes.node.isRequired
}

Heading.defaultProps = {
    h: 1
}

export default Heading