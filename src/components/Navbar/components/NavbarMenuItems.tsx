import Link from '@/components/common/Link'
import clsx from 'clsx'

const ACTIVEOPTION = 'bg-gray-900 text-white'
const INACTIVEOPTION = 'text-gray-300 hover:bg-gray-700 hover:text-white'

const NavbarMenuItems = () => {
  return (
    <>
      <Link
        to="/home"
        className={clsx(
          INACTIVEOPTION,
          'block px-3 py-2 rounded-md text-base font-medium'
        )}
        aria-current="page"
      >
        Home
      </Link>
      <Link
        to="/team"
        className={clsx(
          ACTIVEOPTION,
          'block px-3 py-2 rounded-md text-base font-medium'
        )}
        aria-current="page"
      >
        Team
      </Link>
      <Link
        to="/projects"
        className={clsx(
          INACTIVEOPTION,
          'block px-3 py-2 rounded-md text-base font-medium'
        )}
        aria-current="page"
      >
        Projects
      </Link>
      <Link
        to="/calendar"
        className={clsx(
          INACTIVEOPTION,
          'block px-3 py-2 rounded-md text-base font-medium'
        )}
        aria-current="page"
      >
        Calendar
      </Link>
    </>
  )
}

export default NavbarMenuItems
