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
        className="max-w-[300px] w-full h-[300px] object-cover"
      />
      <h1 className="text-4xl font-bold text-blue-500">
        404 - Ma'lumot topilmadi
      </h1>
      {query && (
        <p className="mt-4 text-lg text-gray-700 dark:text-gray-300">
          "{query}" bo'yicha qidirilgan ma'lumot topilmadi.
        </p>
      )}
      <p className="mt-2 text-gray-700 dark:text-gray-400">
        Uzr, siz qidirayotgan sahifa mavjud emas yoki noto'g'ri URL kiritildi.
      </p>
      <Link
        href="/home"
        className="mt-6 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
      >
        Bosh sahifaga qaytish
      </Link>
    </div>
  );
}
