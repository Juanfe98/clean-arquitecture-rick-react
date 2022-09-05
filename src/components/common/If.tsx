import React, { Fragment, ReactNode } from 'react'

interface Props {
  condition: Boolean
  Then?: ReactNode | ReactNode[]
  Else?: ReactNode | ReactNode[]
  children?: ReactNode | ReactNode[]
}

const If = ({
  condition,
  Then = null,
  Else = null,
  children = null,
}: Props) => {
  if (condition) {
    if (children) {
      return <Fragment>{children}</Fragment>
    } else {
      return <Fragment>{Then}</Fragment>
    }
  } else {
    if (Else) {
      return <Fragment>{Else}</Fragment>
    }
    return null
  }
}

export default If;
