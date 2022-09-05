import { ReactElement } from 'react';

interface Props {
  children: ReactElement | ReactElement[]
}

const NavbarMenu = ({ children }: Props) => {
  return (
    <div className="hidden sm:ml-6 sm:block">
      <div className="flex space-x-4">{children}</div>
    </div>
  )
};

export default NavbarMenu;
