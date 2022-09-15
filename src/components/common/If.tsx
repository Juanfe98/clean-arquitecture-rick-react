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
      return <>{children}</>
    } else {
      return <>{Then}</>
    }
  } else {
    if (Else) {
      return <>{Else}</>
    }
    return null
  }
}

export default If;
