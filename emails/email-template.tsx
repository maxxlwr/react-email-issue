import { Body, Head, Html, Preview } from '@react-email/components'
import * as React from 'react'

import ReusableComponent from './_components/reusableComponent'
import ReusableComponent2 from './components/reusableComponent2'

export const EmailTemplate = () => (
  <Html>
    <Head />
    <Preview>Preview</Preview>
    <Body>
      {/* Changes in these components will not cause hot reload in EmailTemplate */}
      <ReusableComponent />
      <ReusableComponent2 />
    </Body>
  </Html>
)

export default EmailTemplate
