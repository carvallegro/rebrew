import { Button, ButtonGroup, Icon, TableCell, TableRow } from 'bold-ui'
import React from 'react'
import BackgroundName from '../background-fields/background-name'
import BackgroundDescription from '../background-fields/background-description'
import BackgroundFeatName from '../background-fields/background-feat-name'
import BackgroundProficiencies from '../background-fields/background-proficiencies'

const BackgroundCreateForm = () => (
  <TableRow>
    <TableCell>
      <BackgroundName />
    </TableCell>

    <TableCell>
      <BackgroundProficiencies />
    </TableCell>

    <TableCell>
      <BackgroundFeatName />
      <BackgroundDescription />
    </TableCell>

    <TableCell>
      <ButtonGroup>
        <Button kind="danger" size="small" skin="outline">
          <Icon icon="trashOutline" size={1.5} />
        </Button>
        <Button kind="primary" size="small" skin="default">
          <Icon icon="plus" size={1.5} />
        </Button>
      </ButtonGroup>
    </TableCell>
  </TableRow>
)

export default BackgroundCreateForm
