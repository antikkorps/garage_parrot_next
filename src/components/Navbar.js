import Link from 'next/link';

function Navbar() {
  return (
    <div>
      <h1>Garage Parrot</h1>
      <Link href='/about'>A propos</Link>
      <Link href='/contact'>Contact</Link>
      <Link href='/dashboard'>Dashboard</Link>
    </div>
  );
}

export default Navbar;
