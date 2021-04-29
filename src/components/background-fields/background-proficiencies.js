import React from 'react'
import PropTypes from 'prop-types'
import { FormControl, Select, SelectInline, Text } from 'bold-ui'

import { skills } from '../../proficiencies-utils'

const SKILL_COUNT_CHOICES = [
  {
    value: 0,
    label: 'all of'
  }
]

const BackgroundProficiencies = ({ value, ...props }) => (
  <div>
    {value.skills_count_choose && (
      <Text fontSize={0.8125} fontWeight="bold">
        Gain
      </Text>
    )}
    <SelectInline
      defaultButtonText="Choose a value"
      items={SKILL_COUNT_CHOICES}
      itemToString={i => i && i.label}
      placeholder="Search for a value"
    />
    <FormControl required>
      <Select
        items={Object.values(skills)}
        itemToString={i => i}
        name="favorite pasta"
        multiple
        required
        {...props}
      />
    </FormControl>
  </div>
)

BackgroundProficiencies.propTypes = {
  value: PropTypes.shape({
    skills_count_choose: PropTypes.number,
    skills: PropTypes.arrayOf(PropTypes.string)
  }).isRequired,
  ...Select.propTypes
}

BackgroundProficiencies.defaultProps = {
  value: {
    skills_count_choose: null,
    skills: []
  }
}

export default BackgroundProficiencies
