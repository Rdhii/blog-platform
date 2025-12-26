import React from "react";
import Logo from "./Logo";

export default function Footer() {
  return (
    <div className="md:flex-row flex flex-col items-center justify-around border-t border-gray-200 py-10">
      <Logo />
      <p className="text-sm text-muted-foreground my-4 md:my-0">
        A personal blogging platform for sharing ideas.
      </p>
      <p className="text-sm text-muted-foreground">
        © 2025 Inkwell. All rights reserved.
      </p>
    </div>
  );
}
