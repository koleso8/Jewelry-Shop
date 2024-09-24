import Navigation from './Navigation';

const MobileMenu = ({ isOpen }) => {
  return (
    <div className="-z-10 bg-zinc-600  absolute w-screen h-[50vh] top-0 left-0 flex justify-center items-center flex-col">
      <Navigation />
    </div>
  );
};

export default MobileMenu;
