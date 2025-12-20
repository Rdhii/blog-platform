import React from "react";
import Logo from "./Logo";

export default function Footer() {
  return (
    <div className="flex items-center justify-around border-t border-gray-200 py-10">
      <Logo />
      <p className="text-sm text-muted-foreground">
        A personal blogging platform for sharing ideas.
      </p>
      <p className="text-sm text-muted-foreground">
        © 2025 Inkwell. All rights reserved.
      </p>
    </div>
  );
}
