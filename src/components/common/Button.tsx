import clsx from 'clsx'
import React, { ReactElement } from 'react'
import { useNavbarContext } from '../Navbar/hooks/useNavbarContext'

interface Props {
  className?: String
  children: ReactElement | ReactElement[]
}

const Button = ({ className, children, ...props }: Props) => {
  const { toggleShowMobileMenu } = useNavbarContext()

  const defaultClasses =
    'inline-flex items-center justify-center rounded-md p-2'

  return (
    <button
      type="button"
      className={clsx(defaultClasses, className)}
      onClick={() => toggleShowMobileMenu()}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
