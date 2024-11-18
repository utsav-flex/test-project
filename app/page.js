export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
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
