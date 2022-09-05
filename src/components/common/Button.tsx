import clsx from 'clsx'
import { ReactElement } from 'react'

interface Props {
  className?: String
  children: ReactElement | ReactElement[];
  onClick: () => void;
}

const Button = ({ className, children, onClick, ...props }: Props) => {

  const defaultClasses = 'inline-flex items-center justify-center';

  return (
    <button
      type="button"
      className={clsx(defaultClasses, className)}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
