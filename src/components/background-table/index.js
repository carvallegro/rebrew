import * as R from 'ramda'
import React, { useState } from 'react'
import {
  Button,
  Icon,
  InfoLabel,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from 'bold-ui'

import NewlinesToParagraphs from '../newlines-to-paragraphs'

const tableStyle = {
  th: { padding: '1rem 0.5rem' },
  tr: { verticalAlign: 'top' }
}
const cellStyle = {
  fontSize: '1rem',
  padding: '0.5rem'
}

const BackgroundTable = ({ backgrounds = [] }) => {
  const [sort, setSort] = useState(['name', false])

  const rows = R.pipe(
    R.sortBy(R.prop(sort[0])),
    sort[1] ? R.reverse : R.identity
  )(backgrounds)

  return (
    <Table style={tableStyle}>
      <TableHead>
        <TableRow>
          <TableHeader
            onSortChange={setSort}
            sortDirection="ASC"
            sortable
            style={{
              ...cellStyle,
              width: '150px'
            }}
          >
            Name
          </TableHeader>
          <TableHeader
            onSortChange={function noRefCheck() {}}
            sortDirection=""
            sortable={false}
            style={{
              ...cellStyle,
              width: '250px'
            }}
          >
            Proficiencies
          </TableHeader>
          <TableHeader
            onSortChange={function noRefCheck() {}}
            sortDirection=""
            sortable={false}
            style={{
              ...cellStyle,
              width: '250px'
            }}
          >
            Features
          </TableHeader>
          <TableHeader
            style={{
              ...cellStyle,
              width: '100px'
            }}
          >
            Test
          </TableHeader>
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map(background => (
          <TableRow key={background.name}>
            <TableCell style={cellStyle}>{background.name}</TableCell>
            <TableCell style={cellStyle}>
              <InfoLabel
                title={`Gain ${
                  background.skills_count_choose === 0
                    ? 'all'
                    : background.skills_count_choose
                } of`}
              >
                {background.skills.join(', ')}
              </InfoLabel>
            </TableCell>
            <TableCell style={cellStyle}>
              <InfoLabel placeholder="-" title={background.feature}>
                {background.desc && (
                  <NewlinesToParagraphs text={background.desc} />
                )}
              </InfoLabel>
            </TableCell>
            <TableCell>
              <Button
                kind="normal"
                onClick={function noRefCheck() {}}
                size="small"
                skin="ghost"
              >
                <Icon icon="adjust" size={1.5} />
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

export default BackgroundTable
