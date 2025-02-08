import Link from "next/link";
import React from "react";

const HeaderLink = ({
  arrow,
  href = "/",
  title,
  infoTitle,
}: {
  arrow?: string;
  href?: string;
  title?: string;
  infoTitle?: string;
}) => {
  return (
    <div className="flex items-center">
      <Link href={href} className="text-[16px]">
        {title}
      </Link>

      <span className="text-[16px] mx-[2px]"> {arrow}</span>
      <span className="text-[16px]">{infoTitle}</span>
    </div>
  );
};

export default HeaderLink;
