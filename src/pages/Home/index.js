import React from 'react'
import styled from '@emotion/styled'

const Header = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const Home = () => (
  <Header>
    <header className="App-header">
      <h1>H1 - Rebrew</h1>
      <h2>More to come</h2>
    </header>
  </Header>
)
