import * as R from 'ramda'
import React from 'react'
import ReactJson from 'react-json-view'
import { navigate } from '@reach/router'
import { Alert, Breadcrumbs, Button, Link, Text, VFlow } from 'bold-ui'

import { SPELL_ATTRIBUTES } from '../../spell-utils'
import { redirectClipboardTo } from '../../clipboard'

const ImportPage = ({ location, importSpells }) => {
  const { invalidJson, data } = R.pathOr({}, ['state'], location)
  const isDataEmpty = R.isEmpty(data) || R.isNil(data)
  const normalizedData = R.is(Array, data) ? data : [data]

  const importSpellData = R.pipe(
    R.map(R.pick(SPELL_ATTRIBUTES)),
    R.indexBy(R.prop('name'))
  )

  const isValidJson = !isDataEmpty && !invalidJson
  return (
    <VFlow
      vSpacing={1}
      style={{ maxWidth: '800px' }}
      onPaste={redirectClipboardTo('import')}
    >
      <Breadcrumbs>
        <Link
          color="inherit"
          textDecoration="none"
          onClick={() => navigate('../spells')}
        >
          Spells
        </Link>
        <Link color="inherit" textDecoration="none">
          Import
        </Link>
      </Breadcrumbs>

      <Text component="p" fontSize={1}>
        Imported values that have the same name as a SRD content will be
        ignored. Values that have the same name as a homebrew content will be
        overriden.
      </Text>

      {!invalidJson && isDataEmpty && (
        <Alert type="warning">
          The imported value is empty.{' '}
          <Link onClick={() => navigate('../spells')}>Go back</Link>
        </Alert>
      )}
      {invalidJson && (
        <Alert type="danger">
          The imported value is not a valid JSON content.{' '}
          <Link onClick={() => navigate('../spells')}>Go back</Link>
        </Alert>
      )}
      {isValidJson && (
        <Button
          kind="primary"
          skin="default"
          size="medium"
          onClick={() => {
            importSpells(importSpellData(normalizedData))
            navigate('../spells')
          }}
        >
          Import {normalizedData.length} element
          {normalizedData.length > 1 && 's'}
        </Button>
      )}
      {isValidJson && (
        <ReactJson
          src={normalizedData}
          name={false}
          displayDataTypes={false}
          displayObjectSize={true}
          enableClipboard={false}
          iconStyle="square"
          indentWidth={2}
          theme="grayscale:inverted"
          shouldCollapse={() => false}
        />
      )}
      {isValidJson && (
        <Button
          kind="primary"
          skin="default"
          size="medium"
          onClick={() => {
            importSpells(importSpellData(normalizedData))
            navigate('../spells')
          }}
        >
          Import {normalizedData.length} element
          {normalizedData.length > 1 && 's'}
        </Button>
      )}
    </VFlow>
  )
}

export default ImportPage
