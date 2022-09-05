import { DynamicRefForwardingComponent } from '@/helpers/types'
import React, { Ref, forwardRef } from 'react'

interface Props {
  to: string
  as?: React.ElementType
  className?: string
}

const Link: DynamicRefForwardingComponent<'span', Props> = forwardRef(
  (
    { to, as: Tag = 'span', className, ...props }: Props,
    ref: Ref<HTMLElement>
  ) => {
    return <Tag  ref={ref} href={to} className={className} {...props} />
  }
)

Link.displayName = 'Link';


export default Link
