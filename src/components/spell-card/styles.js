import styled from '@emotion/styled'

export const CardContent = styled.div`
  margin: 8px 0;
`

export const Description = styled.div`
  max-height: 200px;
  overflow: scroll;

  & > p {
    margin-bottom: 8px;

    &:last-of-type {
      margin-bottom: 0;
    }
  }
`
