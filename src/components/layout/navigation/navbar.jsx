import Logo from './logo';
import Navlinks from './navlinks';
import SearchBar from './searbar';
import MinDeviceRendering from '@/components/composables/device-rendering';

const Navbar = () => {
  return (
    <nav className="col-span-full gap-y-4 grid auto-cols-auto pt-4 px-4 sm:items-center">
      <Logo />
      <SearchBar />
      <MinDeviceRendering screenSize="768px">
        <Navlinks />
      </MinDeviceRendering>
    </nav>
  );
};

export default Navbar;
