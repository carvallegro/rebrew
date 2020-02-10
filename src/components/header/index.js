import React, { useRef, useState } from 'react'
import { Button, Dropdown, DropdownItem, Icon, Link, Tooltip } from 'bold-ui'

import Logo from '../logo'

import { HeaderWrapper } from './styles'
import { navigate } from '@reach/router'

const Header = () => {
  const navigationRef = useRef()
  const [navigationOpen, setNavigationOpen] = useState(false)
  const handleClick = () => setNavigationOpen(true)
  const handleClose = () => setNavigationOpen(false)

  return (
    <HeaderWrapper>
      <Button
        innerRef={navigationRef}
        onClick={handleClick}
        skin="ghost"
        size="small"
      >
        <Icon icon="hamburguerMenu" />
      </Button>
      <Dropdown
        anchorRef={navigationRef}
        open={navigationOpen}
        onClose={handleClose}
        popperProps={{ placement: 'bottom-start' }}
      >
        <DropdownItem disabled>Races</DropdownItem>
        <DropdownItem disabled>Classes</DropdownItem>
        <DropdownItem disabled>Subclasses</DropdownItem>
        <DropdownItem onClick={() => navigate('/backgrounds')}>
          Backgrounds
        </DropdownItem>
        <DropdownItem disabled>Feats</DropdownItem>
        <DropdownItem onClick={() => navigate('/spells')}>Spells</DropdownItem>
      </Dropdown>

      <Link color="inherit" textDecoration="none" onClick={() => navigate('/')}>
        <Logo title="Rebrew logo" />
      </Link>

      <Tooltip text="Upload content" placement="bottom-end">
        <Button onClick={handleClick} skin="ghost" size="small" disabled>
          <Icon icon="upload" />
        </Button>
      </Tooltip>
    </HeaderWrapper>
  )
}

export default Header
