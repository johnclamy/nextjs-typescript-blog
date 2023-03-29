import Image from "next/image";

export default function HeaderImage() {
  return (
    <section className="d-flex justify-content-center mt-4">
      <Image
        className="img-fluid rounded-circle border border-3 border-warning"
        src="/images/profile-pic.jpg"
        width={200}
        height={200}
        alt="Photo by Igor Bumba on Unsplash - ironman showing hand with light beam"
        priority={true}
      />
    </section>
  );
}
