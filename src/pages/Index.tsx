import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Programs from "@/components/Programs";
import Partnership from "@/components/Partnership";
import Reviews from "@/components/Reviews";
import Contacts from "@/components/Contacts";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Programs />
      <Partnership />
      <Reviews />
      <Contacts />
      <Footer />
    </div>
  );
};

export default Index;
