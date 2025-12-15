import Logo from "./Logo";

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 shadow-sm backdrop-blur bg-background/95">
      <div className="mx-30 flex items-center justify-between h-16">
        <Logo />
        <div className="flex items-center gap-2">
          <button className="px-4 py-2 hover:bg-blue-100 hover:cursor-pointer rounded-xl hover:text-blue-500">
            All Posts
          </button>
          <button className="bg-primary px-4 py-2 rounded-xl text-white hover:bg-blue-900 hover:cursor-pointer">
            Write Posts
          </button>
        </div>
      </div>
    </nav>
  );
}
