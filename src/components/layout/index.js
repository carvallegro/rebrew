import React from 'react'
import Header from '../header'
import { Column, Content, Wrapper } from './styles'

const Layout = () => (
  <Wrapper>
    <Column>
      <Header />
      <Content />
    </Column>
  </Wrapper>
)

export default Layout
