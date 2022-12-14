import { ReactElement } from 'react'

interface Props {
  children: ReactElement | ReactElement[]
}

const NavbarMobileMenu = ({ children }: Props) => {
  return (
    <div className="sm:hidden" id="mobile-menu">
      <div className="space-y-1 px-2 pt-2 pb-3">{children}</div>
    </div>
  )
}

export default NavbarMobileMenu;
