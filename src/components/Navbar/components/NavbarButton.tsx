import Button from '@/components/common/Button'
import If from '@/components/common/If'
import Text from '@/components/common/Text'
import { useNavbarContext } from '../hooks/useNavbarContext'

import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const NavbarButton = () => {
  const { showMobileMenu , toggleShowMobileMenu} = useNavbarContext();
  return (
    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
      <Button
        className="
          text-gray-400 hover:bg-gray-700 hover:text-white rounded-md p-2
          focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white
          "
        aria-controls="mobile-menu"
        aria-expanded="false"
        onClick={toggleShowMobileMenu}
      >
        <>
          <Text className="sr-only">Mobile Menu Button</Text>
          <If 
            condition={showMobileMenu}  
            Then={<XMarkIcon className="block h-6 w-6" aria-hidden="true" />}
            Else={<Bars3Icon className="block h-6 w-6" aria-hidden="true" />}
          />
        </>
      </Button>
    </div>
  )
}

export default NavbarButton
