import styled from '@emotion/styled'
import { colors } from 'bold-ui'

import { ReactComponent as LogoSVG } from '../header/logo.svg'

export const Img = styled(LogoSVG)`
  fill: ${colors.gray.c20};
  height: ${({ height }) => height};
  width: ${({ width }) => width};
`
