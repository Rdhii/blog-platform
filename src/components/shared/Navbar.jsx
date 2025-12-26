import Logo from "./Logo";
import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 shadow-sm backdrop-blur bg-background/95">
      <div className="mx-3 md:mx-30 flex items-center justify-between h-16">
        <Logo />
        <div className="md:flex items-center gap-2 hidden">
          <Link
            to="/"
            className="px-4 py-2 hover:bg-blue-100 hover:cursor-pointer rounded-xl hover:text-blue-500"
          >
            All Posts
          </Link>
          <Link
            to="/create"
            className="bg-primary px-4 py-2 rounded-xl text-white hover:bg-blue-900 hover:cursor-pointer"
          >
            Write Posts
          </Link>
        </div>
      </div>
    </nav>
  );
}
