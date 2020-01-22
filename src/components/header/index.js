import React, { useRef, useState } from 'react'
import { Button, Dropdown, DropdownItem, Icon, Tooltip } from 'bold-ui'

import { HeaderWrapper, Logo } from './styles'

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
        <DropdownItem disabled>Backgrounds</DropdownItem>
        <DropdownItem disabled>Feats</DropdownItem>
        <DropdownItem disabled>Spells</DropdownItem>
      </Dropdown>

      <Logo title="Rebrew logo" />

      <Tooltip text="Upload content" placement="bottom-end">
        <Button
          innerRef={navigationRef}
          onClick={handleClick}
          skin="ghost"
          size="small"
          disabled
        >
          <Icon icon="upload" />
        </Button>
      </Tooltip>
    </HeaderWrapper>
  )
}

export default Header
