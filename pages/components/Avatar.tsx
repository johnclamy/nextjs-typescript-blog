import Image from "next/image";
import Link from "next/link";

export default function Avatar() {
  return (
    <section>
      <Link href="/">
        <Image
          className="img-fluid rounded-circle border border-3 border-primary"
          width="42"
          height="42"
          alt="photo of currently signed in user"
          src="/images/user1.jpg"
        />
        <span className="ms-2">jane@janedoe.com</span>
      </Link>
    </section>
  );
}
