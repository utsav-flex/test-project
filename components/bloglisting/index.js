"use client";
import { useEffect, useState } from "react";

export default function BlogListing() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await fetch("https://dummyapi.online/api/movies");
      const responseData = await response.json();
      setBlogs(responseData);
    })();
  }, []);

  return (
    <div className="my-6">
      <div className="py-4 bg-red-500 text-white text-center my-6">
        Blog Listing
      </div>
      <div className="grid grid-cols-3 gap-6">
        {blogs.map((blog, index) => {
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
