import React from 'react'
import { addDecorator } from '@storybook/react';
import { ThemeProvider } from 'bold-ui'

addDecorator(storyFn => <ThemeProvider>{storyFn()}</ThemeProvider>);
