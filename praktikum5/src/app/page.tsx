import Link from "next/link";

export default function Home() {
    return (
      <div>
      <h1>Welcome to Home</h1>
      <Link href='/profile'>Profile</Link>
      <Link href='/about'>About</Link>
      <Link href='/blogs'>blogs</Link>
      <Link href='/products'>Products</Link>
    </div>
);
}