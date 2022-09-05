import useToggler from '@/hooks/useToggler'
import { useMemo } from 'react'
import If from '../common/If'
import NavbarBody from './components/NavbarBody'
import NavbarButton from './components/NavbarButton'
import NavbarMobileMenu from './components/NavbarMobileMenu'
import { NavbarContext } from './context'

interface Props {
  children: React.ReactNode[] | React.ReactNode
}

const Navbar = ({ children }: Props) => {
  const [showMobileMenu, toggleShowMobileMenu] = useToggler(false)

  /**
   * Memoize the context to prevent unecessary renders.
   */
  const memoizedContextValue = useMemo(
    () => ({
      showMobileMenu,
      toggleShowMobileMenu,
    }),
    [showMobileMenu, toggleShowMobileMenu]
  )

  return (
    <NavbarContext.Provider value={memoizedContextValue}>
      <nav className="bg-gray-800">
        {children}
        <If condition={showMobileMenu}>
          <NavbarMobileMenu />
        </If>
      </nav>
    </NavbarContext.Provider>
  )
}

export default Object.assign(Navbar, {
  Body: NavbarBody,
  Button: NavbarButton,
  MobileMenu: NavbarMobileMenu,
})
