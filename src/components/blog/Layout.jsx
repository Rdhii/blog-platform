import Footer from "./footer";
import { Navbar } from "../shared/Navbar";

export function Layout({ children }) {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
