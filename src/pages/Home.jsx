import HeroSection from "../components/blog/herosection";
import LatestPostSection from "../components/blog/LatestPostSection";
import { Layout } from "../components/shared/Layout";

export default function Home() {
  return (
    <Layout>
      <HeroSection />
      <LatestPostSection />
    </Layout>
  )
}
