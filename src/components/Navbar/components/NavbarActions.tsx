import Button from '@/components/common/Button'
import If from '@/components/common/If'
import Link from '@/components/common/Link'
import Popup from '@/components/common/PopupMenu'
import Text from '@/components/common/Text'
import { BellIcon } from '@heroicons/react/24/outline'
import { useNavbarContext } from '../hooks/useNavbarContext'

const NavbarActions = () => {
  const { showPopupMenu, toggleShowPopupMenu } = useNavbarContext()

  return (
    <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
      <Button
        onClick={() => {
          console.log('Give me some Functionality, please')
        }}
        className="rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
      >
        <Text className="sr-only">View notifications</Text>
        <BellIcon className="h-6 w-6" aria-hidden="true" />
      </Button>

      <Popup.Button>
        {/* This Button - img can be converted in one component called Avatar */}
        <Button
          onClick={() => {
            toggleShowPopupMenu()
          }}
          className="rounded-full bg-gray-800 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
        >
          <Text className="sr-only">Open user menu</Text>
          <img
            className="h-8 w-8 rounded-full"
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt=""
          />
        </Button>

        <If condition={showPopupMenu}>
          <Popup.Menu>
            <Link
              as="a"
              to="/test"
              role="menuitem"
              className="block px-4 py-2 text-sm text-gray-700"
              tabIndex={-1}
            >
              Your Profile
            </Link>
            <Link
              as="a"
              to="/test"
              role="menuitem"
              className="block px-4 py-2 text-sm text-gray-700"
              tabIndex={-1}
            >
              Settings
            </Link>
            <Link
              as="a"
              to="/test"
              role="menuitem"
              className="block px-4 py-2 text-sm text-gray-700"
              tabIndex={-1}
            >
              Sign out
            </Link>
          </Popup.Menu>
        </If>
      </Popup.Button>
    </div>
  )
}

export default NavbarActions
