import { notFound } from "next/navigation";

export default async function Page() {
  let data;

  try {
    const response = await fetch("https://dummyapi.online/api/movies");
    const responseData = await response.json();

    data = responseData;
    // console.log(data, "data");

    if (!data) {
      notFound();
    }
  } catch (error) {
    notFound();
  }

  return (
    <div className="p-4">
      <h1 className="my-4">Blog</h1>
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
      <div className="py-4 bg-red-500 text-white text-center my-6">
        Blog Listing
      </div>
      <div className="grid grid-cols-3 gap-6">
        {data.map((blog, index) => {
          return (
            <div
              key={`blog-${index}`}
              className="p-6 border border-gray-200 rounded-xl shadow-md"
            >
              <span className="block mb-2 text-base font-medium">
                {blog?.id}
              </span>
              <span className="block text-2xl font-medium text-indigo-600 mb-2">
                {blog?.movie}
              </span>
              <div className="inline-block bg-red-200 p-1 rounded text-base text-white">
                {blog?.rating}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
