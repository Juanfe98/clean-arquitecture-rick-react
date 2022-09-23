import useToggler from '@/hooks/useToggler'
import { useMemo } from 'react'
import Navbar from '.'
import If from '../common/If'
import NavbarActions from './components/NavbarActions'
import { NavbarContext } from './context'

const FullNavbar = () => {
  const [showMobileMenu, toggleShowMobileMenu] = useToggler(false)
  const [showPopupMenu, toggleShowPopupMenu] = useToggler(false)

  /**
   * Memoize the context to prevent unecessary renders.
   */
  const memoizedContextValue = useMemo(
    () => ({
      showMobileMenu,
      showPopupMenu,
      toggleShowMobileMenu,
      toggleShowPopupMenu
    }),
    [showMobileMenu, toggleShowMobileMenu, showPopupMenu, toggleShowPopupMenu]
  )

  return (
    <NavbarContext.Provider value={memoizedContextValue}>
      <Navbar>
        <Navbar.Body>
          <Navbar.Button />
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <Navbar.Logo />
            <Navbar.Menu>
              <Navbar.MenuItems />
            </Navbar.Menu>
          </div>
          <NavbarActions />
        </Navbar.Body>
        <If condition={showMobileMenu}>
          <Navbar.MobileMenu>
            <Navbar.MenuItems />
          </Navbar.MobileMenu>
        </If>
      </Navbar>
    </NavbarContext.Provider>
  )
}

export default FullNavbar
