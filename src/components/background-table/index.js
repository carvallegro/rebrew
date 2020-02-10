import * as R from 'ramda'
import React, { useState } from 'react'
import { DataTable, InfoLabel } from 'bold-ui'

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
  const [sort, setSort] = useState(['name'])

  const rows = R.pipe(
    R.sortBy(R.prop('name')),
    sort[0] === '-name' ? R.reverse : R.identity
  )(backgrounds)

  return (
    <DataTable
      rows={rows}
      sort={sort}
      style={tableStyle}
      onSortChange={setSort}
      loading={false}
      columns={[
        {
          name: 'name',
          header: 'Name',
          sortable: true,
          style: {
            ...cellStyle,
            width: '150px'
          },
          render: item => item.name
        },
        {
          name: 'proficiencies',
          header: 'Proficiencies',
          style: {
            ...cellStyle,
            width: '250px'
          },
          render: item => (
            <InfoLabel
              title={`Gain ${
                item.skills_count_choose === 0
                  ? 'all'
                  : item.skills_count_choose
              } of`}
            >
              {item.skills.join(', ')}
            </InfoLabel>
          )
        },
        {
          name: 'feature',
          header: 'Features',
          style: {
            ...cellStyle,
            minWidth: '250px'
          },
          render: item => (
            <InfoLabel placeholder="-" title={item.feature}>
              {item.desc && <NewlinesToParagraphs text={item.desc} />}
            </InfoLabel>
          )
        }
      ]}
    />
  )
}

export default BackgroundTable
