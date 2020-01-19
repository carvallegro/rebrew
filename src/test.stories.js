import React from 'react'

const TestComponent = () => <p>Hello world</p>

export default {
  component: TestComponent,
  title: 'TestComponent'
}

export const text = () => <TestComponent />
