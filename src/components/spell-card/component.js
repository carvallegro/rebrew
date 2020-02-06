import * as R from 'ramda'
import React, { Fragment, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import {
  Button,
  Dropdown,
  DropdownItem,
  HFlow,
  Icon,
  Paper,
  Tag,
  Text,
  VFlow
} from 'bold-ui'

import { spellLevels } from '../../spell-utils'

import { CardContent, Description, HeadingWrapper } from './styles'

const paperStyle = {
  padding: '.5rem 1rem'
}

const SpellCard = ({
  spellName,
  srd,
  levelNumber,
  school,
  castingTime,
  range,
  components,
  duration,
  desc,
  onDelete,
  ...props
}) => {
  const menuRef = useRef()
  const [isOpen, setOpen] = useState(false)

  const [menuOpen, setMenuOpen] = useState(false)
  const handleClick = () => setMenuOpen(true)
  const handleClose = () => {
    setMenuOpen(false)
    menuRef.current.focus()
  }

  return (
    <Paper style={paperStyle} {...props}>
      <HeadingWrapper>
        <HFlow alignItems="center" hSpacing={0.5} justifyContent="flex-start">
          {!isOpen && (
            <Button skin="ghost" size="small" onClick={() => setOpen(true)}>
              <Icon icon="angleDown" />
            </Button>
          )}
          {isOpen && (
            <Button skin="ghost" size="small" onClick={() => setOpen(false)}>
              <Icon icon="angleUp" />
            </Button>
          )}
          <Text fontSize={1} fontStyle="bold">
            {spellName}
          </Text>
          {srd && <Tag type="normal">SRD</Tag>}
        </HFlow>

        {!srd && (
          <Fragment>
            <Button
              innerRef={menuRef}
              size="small"
              skin="ghost"
              onClick={handleClick}
            >
              <Icon icon="dots" />
            </Button>

            <Dropdown
              anchorRef={menuRef}
              open={menuOpen}
              onClose={handleClose}
              popperProps={{ placement: 'bottom-end' }}
            >
              <DropdownItem type="danger" onClick={() => onDelete(spellName)}>
                Delete
              </DropdownItem>
            </Dropdown>
          </Fragment>
        )}
      </HeadingWrapper>
      <CardContent
        alignItems="center"
        hSpacing={0.25}
        justifyContent="flex-start"
        hidden={!isOpen}
      >
        <VFlow>
          <Text component="p" fontSize={1} fontStyle="italic">
            {spellLevels[levelNumber].label} {school}
          </Text>
          <div>
            <Text component="p" fontSize={1}>
              <b>Casting time:</b> {castingTime}
            </Text>
            <Text component="p" fontSize={1}>
              <b>Range:</b> {range}
            </Text>
            <Text component="p" fontSize={1}>
              <b>Components:</b> {components}
            </Text>
            <Text component="p" fontSize={1}>
              <b>Duration:</b> {duration}
            </Text>
          </div>
          <Description>
            {desc.split('\n').map((text, i) => (
              <Text key={i} component="p" fontSize={1}>
                {text}
              </Text>
            ))}
          </Description>
        </VFlow>
      </CardContent>
    </Paper>
  )
}

SpellCard.propTypes = {
  spellName: PropTypes.string,
  srd: PropTypes.bool,
  levelNumber: PropTypes.number,
  school: PropTypes.string,
  castingTime: PropTypes.string,
  range: PropTypes.string,
  components: PropTypes.string,
  duration: PropTypes.string,
  desc: PropTypes.string,
  onDelete: PropTypes.func
}

SpellCard.defaultProps = {
  onDelete: R.identity
}

export default SpellCard
