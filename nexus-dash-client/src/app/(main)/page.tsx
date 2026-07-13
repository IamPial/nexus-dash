import Banner from "@/components/homepage/Banner";
import CategoriesSection from "@/components/homepage/CategoriesSection";
import FaqSection from "@/components/homepage/FaqSection";

import FeaturesSection from "@/components/homepage/FeaturesSection";
import NewsletterSection from "@/components/homepage/NewsletterSection";
import StatsSection from "@/components/homepage/StatsSection";
import TestimonialSection from "@/components/homepage/TestimonialSection";


const Home: React.FC = () => {
  return (
    <main >
      <Banner />
      <StatsSection/>
      <FeaturesSection/>
      <CategoriesSection/>
      <TestimonialSection/>
      <FaqSection/>
      <NewsletterSection/>
    </main>
  );
};

export default Home;