import { PenLine } from "lucide-react";
import { Link } from "react-router-dom";

export default function HeroSection() {


  return (
    <div className="flex flex-col items-center justify-center h-120 gap-3">
      <h1 className="text-7xl font-bold">
        Welcome to <span className="text-primary">InkWell</span>
      </h1>
      <p className="text-xl text-muted-foreground w-170 text-center">
        A space for thoughts, stories, and ideas. Discover articles on design,
        development, and creativity.
      </p>
      <Link to="/create" className="flex gap-2 items-center bg-primary transition delay-50 duration-250 ease-in-out px-8 py-3 rounded-lg text-white hover:-translate-y-1 hover:scale-110 hover:bg-blue-900 hover:cursor-pointer">
        <PenLine className="size-4" /> Start Writing
      </Link>
    </div>
  );
}
