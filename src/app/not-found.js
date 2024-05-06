import Link from "next/link";

export default function NotFound() {
  return (
    <div>
      <h1>This page can not be found.</h1>
      <Link href={"/"}>Go to home</Link>
    </div>
  );
}
