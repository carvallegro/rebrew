import styled from '@emotion/styled'

export const Wrapper = styled.div`
  max-height: 200px;
  overflow: scroll;

  & > p {
    margin-bottom: 8px;

    &:last-of-type {
      margin-bottom: 0;
    }
  }
`
