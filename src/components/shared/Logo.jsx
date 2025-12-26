import { PenLine } from "lucide-react";
import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <Link to="/" className="group gap-2 flex items-center hover:cursor-pointer">
      <div className="bg-primary text-white p-2 rounded-xl ">
        <PenLine className="h-5 w-5" />
      </div>
      <p className="text-xl font-bold">Inkwell</p>
    </Link>
  );
}
  