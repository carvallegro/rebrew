import * as R from 'ramda'
import copy from 'clipboard-copy'

import React, { Fragment, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import { navigate } from '@reach/router'
import styled from '@emotion/styled'
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

const MenuItemAlign = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

const MenuItem = ({ icon, text, type, onClick }) => (
  <DropdownItem type={type} onClick={onClick}>
    <MenuItemAlign>
      <Icon size={1.2} icon={icon} style={{ marginRight: '0.2rem' }} />
      {text}
    </MenuItemAlign>
  </DropdownItem>
)

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

  const spell = {
    spellName,
    srd,
    levelNumber,
    school,
    castingTime,
    range,
    components,
    duration,
    desc
  }
  return (
    <Paper style={paperStyle} onClick={() => setOpen(!isOpen)} {...props}>
      <HeadingWrapper>
        <HFlow alignItems="center" hSpacing={0.5} justifyContent="flex-start">
          <Button skin="ghost" size="small" onClick={() => setOpen(!isOpen)}>
            {!isOpen && <Icon icon="angleDown" />}
            {isOpen && <Icon icon="angleUp" />}
          </Button>

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
              <MenuItem
                icon="penOutline"
                text="Edit"
                onClick={() => navigate(`spells/edit/${spellName}`)}
              />
              <MenuItem
                icon="copyOutline"
                text="Copy to clipboard"
                onClick={() => copy(JSON.stringify(spell))}
              />
              <MenuItem
                icon="trashOutline"
                text="Delete"
                type="danger"
                onClick={() => onDelete(spellName)}
              />
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
