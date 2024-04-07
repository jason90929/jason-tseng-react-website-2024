import React, { PureComponent } from 'react'

class Email extends PureComponent {
  render () {
    return (
      <a
        className="email"
        href="mailto:tsaistorm@gmail.com">
        tsaistorm@gmail.com
      </a>
    )
  }
}

export default Email
