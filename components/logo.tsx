import React from "react";
import Link from "next/link";

function logo() {
  return (
    <div>
      <Link href="/">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-orange-500 via-red-600 to-orange-500 bg-clip-text text-transparent">
          Pingr
        </h1>
      </Link>
    </div>
  );
}

export default logo;
