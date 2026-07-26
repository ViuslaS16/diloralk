
export default async function AboutUsPage() {
  return (
    <div className="bg-white pb-32">
      {/* Hero Image */}
      <div className="w-full h-[500px] md:h-[700px] relative mt-20">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img 
          src="https://bmkltsly13vb.compat.objectstorage.ap-mumbai-1.oraclecloud.com/cdn.ft.lk/assets/uploads/image_778f243c19.jpg" 
          alt="Our Team"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 mt-16 text-center">
        <h2 className="text-xl md:text-2xl text-gray-800 mb-1 font-medium" style={{ fontFamily: "var(--font-inter, sans-serif)" }}>
          Dilora Travales
        </h2>
        <h1 className="text-4xl md:text-6xl font-bold mb-12 text-[#111]" style={{ fontFamily: "var(--font-inter, sans-serif)" }}>
          About Us
        </h1>
        
        <div className="space-y-8 text-gray-700 text-sm md:text-[15px] leading-relaxed font-light px-4 md:px-8">
          <p>
            Experience the enchantment of Sri Lanka with Dilora Travales, a trusted, locally owned destination management company in Sri Lanka with over 50 years of expertise in crafting unforgettable journeys. With deep local knowledge and global standards, Dilora Travales is recognised for delivering seamless, expertly curated travel experiences across the island.
          </p>
          <p>
            Whether you are a solo traveler, couple, group of friends, incentive group, or convention delegate, we design tailor-made itineraries to suit every travel style. As an experienced travel agent specialising in Sri Lanka, our team creates journeys ranging from relaxing beach escapes and thrilling adventures to immersive cultural experiences and the island&apos;s diverse tropical cuisine.
          </p>
          <p>
            Explore Sri Lanka&apos;s lush landscapes, ancient UNESCO World Heritage sites, wildlife sanctuaries, and colonial era treasures with a partner committed to sustainability. Our carbon neutral vehicle fleet, the first in Asia, allows us to operate responsibly, while our partnership with Travelife reflects our long-standing commitment to responsible tourism practices.
          </p>
          <p>
            We offer a diverse selection of accommodation options, from eco-friendly jungle cabanas and boutique retreats to luxury resorts, ensuring comfort, authenticity, and a strong sense of place. Your safety and peace of mind are always prioritised, supported by a dedicated Disaster Recovery Site and USD 5 million in global liability insurance coverage.
          </p>
          <p>
            As a subsidiary of a leading conglomerate, and with ISO 9001 and ISO 14001 certifications, Dilora Travales guarantees excellence in service delivery, quality management, and environmental responsibility. Choosing Dilora Travales means choosing a reliable partner to experience Sri Lanka with confidence, care, and unmatched expertise.
          </p>
          <p className="pt-4 text-gray-800">
            Embark on an extraordinary journey through Sri Lanka and create lifelong memories with Dilora Travales.
          </p>
        </div>
      </div>
    </div>
  );
}
