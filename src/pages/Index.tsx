import Header from "@/components/Header";
import Hero from "@/components/Hero";
import BookGrid from "@/components/BookGrid";
import SubscriptionPlans from "@/components/SubscriptionPlans";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <BookGrid />
      <SubscriptionPlans />
      <Footer />
    </div>
  );
};

export default Index;
