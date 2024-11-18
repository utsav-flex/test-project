export default function page() {
  return (
    <div className="p-4">
      <h1 className="my-4">Contact us</h1>
      <div className="flex gap-4">
        <a href="/contactus" className="bg-red-500">
          Contact us
        </a>
        <a href="/aboutus" className="bg-red-500">
          About us
        </a>
        <a href="/services" className="bg-red-500">
          Service
        </a>
        <a href="/blog" className="bg-red-500">
          Blog
        </a>
      </div>
    </div>
  );
}
