import Link from 'next/link';
import getNavbar from '@/lib/queries/get-navbar';

const Shoplinks = async () => {
  const navbarData = await getNavbar();
  const { data } = navbarData;
  return (
    <ul role="list" className="col-span-full grid">
      {data.attributes.shoplinks.map((shoplink) => (
        <li key={shoplink.id}>
          <Link href={shoplink.href} title={shoplink.title}>
            {shoplink.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Shoplinks;
