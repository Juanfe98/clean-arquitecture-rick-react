import NavbarBody from './components/NavbarBody'
import NavbarLogo from './components/NavbarLogo'
import NavbarButton from './components/NavbarButton'
import NavbarMobileMenu from './components/NavbarMobileMenu'
import NavbarMenuItems from './components/NavbarMenuItems'
import NavbarMenu from './components/NavbarMenu'

interface Props {
  children: React.ReactNode[] | React.ReactNode
}

const Navbar = ({ children }: Props) => {
  return <nav className="bg-gray-800">{children}</nav>
}

export default Object.assign(Navbar, {
  Body: NavbarBody,
  Logo: NavbarLogo,
  Menu: NavbarMenu,
  Button: NavbarButton,
  MobileMenu: NavbarMobileMenu,
  MenuItems: NavbarMenuItems,
})
