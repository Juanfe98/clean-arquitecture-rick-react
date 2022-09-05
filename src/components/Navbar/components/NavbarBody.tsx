
interface Props {
  children:  React.ReactNode[] | React.ReactNode
}

const NavbarBody = ({children}: Props) => {
  return (
    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div className="relative flex h-16 items-center justify-between">
        {children}
      </div>
    </div>
  )
}

export default NavbarBody;
