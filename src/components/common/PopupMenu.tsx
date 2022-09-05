import { ReactNode } from 'react'

interface Props {
  children: ReactNode | ReactNode[]
}

const PopupMenu = ({ children }: Props) => {
  return (
    <div
      className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
      role="menu"
      tabIndex={-1}
    >
      {children}
    </div>
  )
}

const PopupMenuButton = ({ children }: Props) => {
  return <div className="relative ml-3">{children}</div>
}

const Popup = Object.assign(
  {},
  {
    Button: PopupMenuButton,
    Menu: PopupMenu,
  }
)

export default Popup
