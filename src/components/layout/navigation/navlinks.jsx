import Link from 'next/link';
import Shoplinks from './shoplinks';
import getNavbar from '@/lib/queries/get-navbar';

const Navlinks = async () => {
  const navbarData = await getNavbar();
  const { data } = navbarData;
  return (
    <ul role="list" className="col-span-full grid">
      {data.attributes.navlinks.map((navlink) => (
        <li key={navlink.id}>
          <Link href={navlink.href} title={navlink.title}>
            {navlink.name}
          </Link>
        </li>
      ))}
      <Shoplinks />
    </ul>
  );
};

export default Navlinks;
