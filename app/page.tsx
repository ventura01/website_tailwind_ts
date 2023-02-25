import CTASection from "@/components/CTASection";
import FeatureSection from "@/components/FeatureSection";
import Testimonials from "@/components/Testimonials";
import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {

  // const [menu, setMenu] = useState(false);
  
  return (
    <main>
      <section id="main">
        <FeatureSection />
        <Testimonials />
        <CTASection />
      </section>
    </main>
  );
}
