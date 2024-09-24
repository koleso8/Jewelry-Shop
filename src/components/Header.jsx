import Navigation from './Navigation';
import UserMenu from './UserMenu';

const Header = () => {
  return (
    <header className="flex justify-between w-11/12 border-b-[1px]">
      <Navigation />
      <UserMenu />
    </header>
  );
};

export default Header;
