import styled from '@emotion/styled'
import { ReactComponent as LogoSVG } from './logo.svg'
import { colors } from 'bold-ui'

export const HeaderWrapper = styled.header`
  padding: 16px 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Logo = styled(LogoSVG)`
  fill: ${colors.gray.c20};
  height: 45px;
  width: 42px;
`
