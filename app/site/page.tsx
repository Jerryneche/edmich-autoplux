/*import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero"; */
/*
import Header from "../components/Header";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
export default function HomePage() {
  return (
    <main>
      <Header />
      <Hero
        image="/hero-home.jpg"
        title="Edmich Autoplux"
        subtitle="Direct access to quality spare parts, certified mechanics, and reliable logistics—built for Nigeria."
        primaryCta={{ label: "Explore Business", href: "/business" }}
        secondaryCta={{ label: "Shop Parts", href: "/shop" }}
      />
      <Hero
        image="/hero-business.jpg"
        title="Autoplux Market"
        subtitle="Verified suppliers and buyers trading with transparency and speed."
        primaryCta={{ label: "Enter Market", href: "/business/market" }}
      />
      <Hero
        image="/hero-shop.jpg"
        title="Mechanics & Logistics"
        subtitle="Book certified experts and arrange delivery anywhere."
        primaryCta={{ label: "Find Mechanics", href: "/business/mechanics" }}
        secondaryCta={{
          label: "Logistics Network",
          href: "/business/logistics",
        }}
      />
      <Footer />
    </main>
  );
}*/
import Header from "../components/Header";
import Footer from "../components/Footer";
import Hero from "../components/Hero";

export default function HomePage() {
  return (
    <main>
      <Header />
      <Hero
        image="/hero-home.jpg"
        title="Edmich Autoplux"
        subtitle="Direct access to spare parts, mechanics, and logistics—built for Africa."
        primaryCta={{ label: "Explore Business", href: "/business" }}
        secondaryCta={{ label: "Shop Parts", href: "/shop" }}
      />
      <Footer />
    </main>
  );
}
