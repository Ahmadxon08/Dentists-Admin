"use client";

import Image from "next/image";
import Link from "next/link";

const notFoundPage = "/images/notFound.png";

export default function NotFoundPage() {
  const searchParams = new URLSearchParams(
    typeof window !== "undefined" ? window.location.search : ""
  );
  const query = searchParams.get("query");

  return (
    <div className="flex flex-col items-center justify-center h-full bg-gray-100 dark:bg-slate-800">
      <Image
        src={notFoundPage}
        alt=""
        width={300}
        height={300}
        className="max-w-[300px] w-full h-[300px] object-cover"
      />
      <h1 className="text-4xl font-bold text-blue-500">
        404 - Ma&#39;lumot topilmadi
      </h1>
      {query && (
        <p className="mt-4 text-lg text-gray-700 dark:text-gray-300">
          &quot;{query}&quot; bo&#39;yicha qidirilgan ma&#39;lumot topilmadi.
        </p>
      )}
      <p className="mt-2 text-gray-700 dark:text-gray-400">
        Uzr, siz qidirayotgan sahifa mavjud emas yoki noto&#39;g&#39;ri URL
        kiritildi.
      </p>
      <Link
        href="/"
        className="mt-6 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
      >
        Bosh sahifaga qaytish
      </Link>
    </div>
  );
}
