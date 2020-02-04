import React from 'react'
import Header from '../header'
import { Column, Content, Wrapper } from './styles'

const Layout = ({ children }) => (
  <Wrapper>
    <Column>
      <Header />
      <Content>{children}</Content>
    </Column>
  </Wrapper>
)

export default Layout
