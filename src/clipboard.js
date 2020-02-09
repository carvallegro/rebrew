import { navigate } from '@reach/router'

export const redirectClipboardTo = to => v => {
  v.preventDefault()
  const data = v.clipboardData.getData('Text')
  try {
    navigate(to, { state: { data: JSON.parse(data) } })
  } catch {
    navigate(to, { state: { invalidJson: true } })
  }
}
