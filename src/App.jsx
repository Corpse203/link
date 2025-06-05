
import OfferCard from "./components/OfferCard";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SocialLinks from "./components/SocialLinks";
import offers from "./data";

export default function App() {
  return (<>
    <Header />
      <Header />
      <section className="bg-[#1d1d1d] py-10 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {offers.map((offer, index) => (
            <OfferCard key={index} {...offer} />
          ))}
        </div>
        <SocialLinks />
      </section>
      <Footer />
    </>
  );
}
