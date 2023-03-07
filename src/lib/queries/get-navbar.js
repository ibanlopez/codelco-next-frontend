export default async function getNavbar() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/navbar?populate=*`
  );

  if (!res.ok) {
    throw new Error('failed to fetch navbar data');
  }

  return res.json();
}
