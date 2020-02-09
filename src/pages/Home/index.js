import React from 'react'
import { Cell, Grid, Heading, Text } from 'bold-ui'

import Logo from '../../components/logo'
import HomepageLink from '../../components/HomepageLink'

import { Wrapper } from './styles'

const Home = () => (
  <Wrapper>
    <Logo height="80px" width="80px" />
    <Heading level={1} fontSize={2}>
      REBREW
    </Heading>
    <Text component="p" fontSize={1}>
      Welcome to Rebrew, an easy to use interface to generate homebrew content
      for Reroll.
    </Text>
    <Grid gap={2} gapVertical={1}>
      <Cell md={4} sm={6} xs={12}>
        <HomepageLink disabled text="Classes (coming soon)" to="classes" />
      </Cell>
      <Cell md={4} sm={6} xs={12}>
        <HomepageLink
          disabled
          text="Subclasses (coming soon)"
          to="subclasses"
        />
      </Cell>
      <Cell md={4} sm={6} xs={12}>
        <HomepageLink disabled text="Races (coming soon)" to="races" />
      </Cell>
      <Cell md={4} sm={6} xs={12}>
        <HomepageLink
          disabled
          text="Backgrounds (coming soon)"
          to="backgrounds"
        />
      </Cell>
      <Cell md={4} sm={6} xs={12}>
        <HomepageLink disabled text="Feats (coming soon)" to="feats" />
      </Cell>
      <Cell md={4} sm={6} xs={12}>
        <HomepageLink text="Spells" to="spells" />
      </Cell>
    </Grid>
  </Wrapper>
)

export default Home
