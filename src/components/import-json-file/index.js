import React, { useEffect, useState } from 'react'
import { FileUploader } from 'bold-ui'
import { navigate } from '@reach/router'

const readFile = e => {
  try {
    navigate('spells/import', { state: { data: JSON.parse(e.target.result) } })
  } catch {
    navigate('spells/import', { state: { invalidJson: true } })
  }
}

const ImportJsonFile = () => {
  const [files, setFiles] = useState([])

  useEffect(() => {
    files.map(f => {
      const reader = new FileReader()
      reader.onload = readFile
      reader.readAsText(f)
    })
  }, [files])

  return (
    <FileUploader
      accept="application/json"
      text="Click or drop file here"
      onDropAccepted={setFiles}
    />
  )
}

export default ImportJsonFile
