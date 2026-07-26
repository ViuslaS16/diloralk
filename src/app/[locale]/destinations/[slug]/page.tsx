import { setRequestLocale } from 'next-intl/server';
import { Link } from '@/i18n/routing';
import { 
  MapPin, 
  Calendar, 
  Clock, 
  Compass, 
  Sparkles, 
  ArrowRight, 
  ChevronRight,
  Camera,
  Activity,
  Heart
} from 'lucide-react';

interface DestinationDetail {
  name: string;
  subtitle: string;
  description: string;
  heroImage: string;
  secondaryImage: string;
  bestSeason: string;
  recommendedDuration: string;
  vibe: string;
  highlights: { title: string; desc: string }[];
  experiences: string[];
}

const destinationData: Record<string, DestinationDetail> = {
  ella: {
    name: "Ella",
    subtitle: "The Scenic Hill Country Haven",
    description: "Nestled in the lush hills of Sri Lanka's central highlands, Ella is a tranquil sanctuary surrounded by expansive tea plantations, pine forests, and dramatic mountain gaps. It is a haven for adventurers, offering iconic scenic hikes, historic colonial rail structures, and cool, refreshing mountain air that provides a welcome relief from the tropical heat of the coast.",
    heroImage: "https://pub-b417daeb2f2d4ba095744c832cdd926c.r2.dev/destination_ella.jpg",
    secondaryImage: "https://pub-b417daeb2f2d4ba095744c832cdd926c.r2.dev/destination_thumbnail_nuwaraeliya.jpg",
    bestSeason: "January to April",
    recommendedDuration: "2 - 3 Days",
    vibe: "Nature, Adventure, Relaxation",
    highlights: [
      { title: "Nine Arch Bridge", desc: "Witness the iconic colonial-era stone railway bridge nestled amidst dense green jungle." },
      { title: "Little Adam's Peak", desc: "Enjoy a moderate hike through tea fields culminating in panoramic sunset views of the Ella Gap." },
      { title: "Ravana Falls", desc: "Marvel at one of the widest waterfalls in the country, steeped in ancient Hindu legends." },
      { title: "Ella Rock Ascent", desc: "A challenging yet highly rewarding trek offering stunning bird's-eye views of the valley." }
    ],
    experiences: ["Scenic Train Ride from Kandy", "Tea Factory Guided Tour & Tasting", "Ziplining over Ella's Tea Estates", "Hiking to Hidden Waterfalls"]
  },
  kandy: {
    name: "Kandy",
    subtitle: "The Sacred Cultural Capital",
    description: "Framed by misty mountain peaks and built around a tranquil central lake, Kandy is the spiritual and cultural heart of Sri Lanka. As the last capital of the ancient kings, it serves as a proud custodian of Sinhalese heritage. The city boasts sacred temples, grand botanical reserves, and the legendary annual Esala Perahera festival.",
    heroImage: "https://pub-b417daeb2f2d4ba095744c832cdd926c.r2.dev/destination_kandy.jpg",
    secondaryImage: "https://pub-b417daeb2f2d4ba095744c832cdd926c.r2.dev/destination_thumbnail_yala.jpg",
    bestSeason: "December to April",
    recommendedDuration: "2 Days",
    vibe: "Culture, History, Spirituality",
    highlights: [
      { title: "Temple of the Tooth", desc: "Explore the gilded shrine housing the sacred tooth relic of Gautama Buddha." },
      { title: "Royal Botanical Gardens", desc: "Stroll through the massive Peradeniya gardens, famous for their collection of orchids and giant palms." },
      { title: "Kandy Lake Walkway", desc: "Take a peaceful stroll along the lakeside path beneath the shade of tropical trees." },
      { title: "Kandyan Dance Show", desc: "Experience the vibrant costumes, acrobatic movements, and fire-walking of traditional dancers." }
    ],
    experiences: ["Traditional Drumming & Temple Ceremonies", "Spice Garden Walks", "Lake-view Dining", "Exploring Udawattakele Forest Reserve"]
  },
  sigiriya: {
    name: "Sigiriya",
    subtitle: "The Eighth Wonder of the Ancient World",
    description: "Rising 200 meters above the central plains, Sigiriya (Lion Rock) is a monumental fortress built by King Kashyapa in the 5th century. This UNESCO World Heritage site is a masterpiece of ancient urban planning, architecture, engineering, and art, featuring landscaped water gardens, historical graffiti, and the famous frescoes.",
    heroImage: "https://pub-b417daeb2f2d4ba095744c832cdd926c.r2.dev/destination_sigiriya.jpg",
    secondaryImage: "https://pub-b417daeb2f2d4ba095744c832cdd926c.r2.dev/destination_thumbnail_jaffna.jpg",
    bestSeason: "January to April, July to August",
    recommendedDuration: "1 - 2 Days",
    vibe: "Ancient History, Archeology, Wonder",
    highlights: [
      { title: "The Lion Gate Paws", desc: "Climb through the monumental stone lion paws guarding the final pathway to the summit." },
      { title: "Sigiriya Frescoes", desc: "Admire the preserved 1500-year-old colorful paintings of celestial maidens." },
      { title: "Pidurangala Rock", desc: "Scale the neighboring peak at dawn for the most iconic view of Sigiriya rising from the jungle." },
      { title: "Ancient Water Gardens", desc: "Explore the symmetric royal pleasure gardens with operating gravity-fed fountains." }
    ],
    experiences: ["Dawn Hike up Pidurangala Rock", "Village Cycle Tour & Traditional Lunch", "Sigiriya Museum Visit", "Hot Air Ballooning over the Plains"]
  },
  "nuwara-eliya": {
    name: "Nuwara Eliya",
    subtitle: "Little England of the Highlands",
    description: "Blessed with a cool, spring-like climate, Nuwara Eliya is the heart of Sri Lanka's premium tea industry. The town was founded by colonial pioneers, leaving behind elegant Tudor-style cottages, red brick post offices, manicured golf courses, and pristine botanical gardens that give it the enduring nickname 'Little England'.",
    heroImage: "https://pub-b417daeb2f2d4ba095744c832cdd926c.r2.dev/destination_thumbnail_nuwaraeliya.jpg",
    secondaryImage: "https://pub-b417daeb2f2d4ba095744c832cdd926c.r2.dev/destination_kandy.jpg",
    bestSeason: "February to April",
    recommendedDuration: "2 Days",
    vibe: "Colonial Charm, Tea Estates, Cool Climate",
    highlights: [
      { title: "Horton Plains", desc: "Hike through cloud forests to World's End, a precipitous cliff dropping nearly 1,000 meters." },
      { title: "Pedro Tea Estate", desc: "Walk through rolling green hills and see how Ceylon tea is harvested and processed." },
      { title: "Lake Gregory", desc: "Relax by the lakeside with boat rides, jet skiing, and beautiful waterside lawns." },
      { title: "Colonial Landmarks", desc: "Visit the iconic Nuwara Eliya Post Office and the historic Grand Hotel." }
    ],
    experiences: ["High Tea at The Grand Hotel", "Guided Tea Estate Walk & Plucking", "Boating on Lake Gregory", "Trekking to Baker's Falls"]
  },
  galle: {
    name: "Galle Fort",
    subtitle: "Colonial Charm & Coastal Sophistication",
    description: "Built by the Portuguese, heavily fortified by the Dutch, and adapted by the British, Galle Fort is a living UNESCO World Heritage monument. Encircled by thick granite ramparts on three sides, the fort's cobblestone streets are lined with historic villas, boutique hotels, trendy art galleries, and charming cafes overlooking the Indian Ocean.",
    heroImage: "https://pub-b417daeb2f2d4ba095744c832cdd926c.r2.dev/destination_thumbnail_galle.jpg",
    secondaryImage: "https://pub-b417daeb2f2d4ba095744c832cdd926c.r2.dev/destination_thumbnail_bentota.jpg",
    bestSeason: "December to April",
    recommendedDuration: "1 - 2 Days",
    vibe: "History, Boutique Shopping, Coastal Heritage",
    highlights: [
      { title: "Galle Lighthouse", desc: "Take a photo of the iconic white lighthouse standing tall on the edge of the fort ramparts." },
      { title: "Fort Ramparts Walk", desc: "Walk the perimeter walls at sunset as locals fly kites and waves crash below." },
      { title: "Dutch Reformed Church", desc: "Visit the historic 18th-century church with gravestones paving the floors." },
      { title: "Pedlar Street Cafes", desc: "Explore narrow streets filled with gelato shops, jewelry stores, and galleries." }
    ],
    experiences: ["Sunset Walk on the Ramparts", "Boutique Shopping & Art Gallery Hop", "Cycling in the Galle Countryside", "Traditional Mask Painting workshop"]
  },
  mirissa: {
    name: "Mirissa",
    subtitle: "Sun-Kissed Shores & Whale Watching",
    description: "Mirissa is a quintessential tropical beach town on the southern coast of Sri Lanka. Known for its crescent-shaped bay, golden sands, and leaning palm trees, it balances relaxing beach days with a lively nightlife and world-class ocean excursions, making it a favorite stop for travelers.",
    heroImage: "https://pub-b417daeb2f2d4ba095744c832cdd926c.r2.dev/destination_thumbnail_mirissa.jpg",
    secondaryImage: "https://pub-b417daeb2f2d4ba095744c832cdd926c.r2.dev/destination_thumbnail_bentota.jpg",
    bestSeason: "November to April",
    recommendedDuration: "2 - 3 Days",
    vibe: "Beach, Marine Wildlife, Nightlife",
    highlights: [
      { title: "Coconut Tree Hill", desc: "Visit the famous red-clay headland lined with symmetrical coconut palms overlooking the sea." },
      { title: "Blue Whale Watching", desc: "Set sail on an early morning cruise to spot the blue whales feeding in the deep waters." },
      { title: "Parrot Rock", desc: "Climb the rocky islet just off the shore for a complete view of Mirissa's coastline." },
      { title: "Secret Beach", desc: "Escape the main crowds to find a secluded cove perfect for swimming and snorkeling." }
    ],
    experiences: ["Ocean Safari to spot Blue Whales & Dolphins", "Beachside Seafood Barbecues", "Surfing at Mirissa Point Break", "Snorkeling with Giant Sea Turtles"]
  },
  yala: {
    name: "Yala National Park",
    subtitle: "Wild Kingdom of the Leopards",
    description: "Yala is Sri Lanka's most celebrated wildlife destination. Spanning a vast coastal territory of semi-arid scrub, lagoons, and sandy dunes, the park is home to an extraordinary variety of animals, including elephants, sloth bears, crocodiles, and holds the highest leopard density in the world.",
    heroImage: "https://pub-b417daeb2f2d4ba095744c832cdd926c.r2.dev/destination_thumbnail_yala.jpg",
    secondaryImage: "https://pub-b417daeb2f2d4ba095744c832cdd926c.r2.dev/destination_thumbnail_udawalawe.jpg",
    bestSeason: "February to June (Dry season is best for viewing)",
    recommendedDuration: "2 Days",
    vibe: "Wildlife, Safari, Wilderness",
    highlights: [
      { title: "Leopard Safaris", desc: "Embark on guided 4x4 game drives in Block 1, the optimal zone for leopard sightings." },
      { title: "Elephant Waterholes", desc: "Observe herds of Sri Lankan elephants bathing and socializing in the lagoons." },
      { title: "Ancient Sithulpawwa", desc: "Visit a 2000-year-old rock temple tucked deep within the wilderness of the park." },
      { title: "Coastal Dunes", desc: "See where the wild bushland meets the pristine, untouched beaches of the Indian Ocean." }
    ],
    experiences: ["Morning & Afternoon Jeep Safaris", "Luxury Glamping in the Jungle", "Birdwatching around the Salt Lagoons", "Night Safari outside the Park boundary"]
  },
  bentota: {
    name: "Bentota",
    subtitle: "The Golden Lagoon of Water Sports",
    description: "Bentota is a premier beach resort destination where the Bentota River flows into the sea, forming a tranquil lagoon. Famed for its expansive golden sands and calm waters, it is a playground for water sports enthusiasts and those seeking luxury beachfront relaxation.",
    heroImage: "https://pub-b417daeb2f2d4ba095744c832cdd926c.r2.dev/destination_thumbnail_bentota.jpg",
    secondaryImage: "https://pub-b417daeb2f2d4ba095744c832cdd926c.r2.dev/destination_thumbnail_mirissa.jpg",
    bestSeason: "December to April",
    recommendedDuration: "2 Days",
    vibe: "Resorts, Water Sports, Relaxation",
    highlights: [
      { title: "Bentota Lagoon", desc: "Try jet skiing, windsurfing, banana boating, and wakeboarding in the calm lagoon." },
      { title: "Brief Garden", desc: "Wander through the landscaped estate created by Bevis Bawa, brother of architect Geoffrey Bawa." },
      { title: "Madu Ganga River Safari", desc: "Cruise through mangrove forests, stopping at cinnamon islands and ancient temples." },
      { title: "Kosgoda Hatchery", desc: "Learn about conservation efforts protecting green, loggerhead, and hawksbill turtles." }
    ],
    experiences: ["Jet Skiing & Water Sports", "Madu River Mangrove Boat Tour", "Architectural Tour of Bawa Gardens", "Releasing Baby Turtles at Sunset"]
  },
  jaffna: {
    name: "Jaffna",
    subtitle: "The Vibrant Northern Outpost",
    description: "Located at the northernmost tip of the island, Jaffna offers a completely unique experience. With its distinct culture, colorful Hindu temples, colonial forts, and calm lagoons, it is a fascinating destination that has recently re-emerged as a major cultural travel highlight.",
    heroImage: "https://pub-b417daeb2f2d4ba095744c832cdd926c.r2.dev/destination_thumbnail_jaffna.jpg",
    secondaryImage: "https://pub-b417daeb2f2d4ba095744c832cdd926c.r2.dev/destination_sigiriya.jpg",
    bestSeason: "January to September",
    recommendedDuration: "2 - 3 Days",
    vibe: "Culture, Temples, Heritage",
    highlights: [
      { title: "Nallur Kandaswamy Temple", desc: "Marvel at the golden arches and elaborate towers of this historic Hindu temple." },
      { title: "Jaffna Fort", desc: "Explore the star-shaped Dutch fort overlooking the shallow, turquoise lagoon." },
      { title: "Delft Island", desc: "Take a ferry to this remote coral island to see wild ponies and colonial ruins." },
      { title: "Keerimalai Springs", desc: "Visit the natural mineral water springs believed to have ancient healing properties." }
    ],
    experiences: ["Ferry ride to Delft Island", "Tasting authentic Jaffna Crab Curry", "Visiting local markets for palmyrah products", "Exploring the public library heritage site"]
  },
  kalpitiya: {
    name: "Kalpitiya",
    subtitle: "Dolphins & Kitesurfing Paradise",
    description: "Kalpitiya is a peninsula on the western coast of Sri Lanka renowned as one of the best kitesurfing destinations in Asia. With its strong, consistent winds, natural sandbars, and deep channels populated by hundreds of spinner dolphins, it is a dream spot for marine adventure lovers.",
    heroImage: "https://pub-b417daeb2f2d4ba095744c832cdd926c.r2.dev/destination_thumbnail_kalpitiya.jpg",
    secondaryImage: "https://pub-b417daeb2f2d4ba095744c832cdd926c.r2.dev/destination_thumbnail_mirissa.jpg",
    bestSeason: "May to October (Kitesurfing), November to April (Dolphins)",
    recommendedDuration: "2 Days",
    vibe: "Adventure, Water Sports, Marine Life",
    highlights: [
      { title: "Kalpitiya Lagoon", desc: "Enjoy world-class kitesurfing in the shallow, wind-swept waters of the lagoon." },
      { title: "Spinner Dolphin Watching", desc: "Board a boat to see massive pods of hundreds of wild dolphins leaping in the ocean." },
      { title: "Bar Reef Snorkeling", desc: "Explore the largest coral reef system in Sri Lanka, home to manta rays and sea turtles." },
      { title: "Dutch Bay", desc: "Discover historic colonial outposts and isolated beaches of the peninsula." }
    ],
    experiences: ["Kitesurfing Lessons & Freestyle Riding", "Dolphin & Sperm Whale Watching Safari", "Snorkeling at Bar Reef", "Jungle camping on remote sand spits"]
  },
  udawalawe: {
    name: "Udawalawe",
    subtitle: "The Ultimate Elephant Sanctuary",
    description: "Udawalawe National Park rivals the savannahs of East Africa for wildlife viewing. Built around a massive reservoir, it is the best place in Sri Lanka to see wild Asian elephants roaming in their natural habitat, alongside water buffaloes, monitors, and diverse bird species.",
    heroImage: "https://pub-b417daeb2f2d4ba095744c832cdd926c.r2.dev/destination_thumbnail_udawalawe.jpg",
    secondaryImage: "https://pub-b417daeb2f2d4ba095744c832cdd926c.r2.dev/destination_thumbnail_yala.jpg",
    bestSeason: "October to April",
    recommendedDuration: "1 - 2 Days",
    vibe: "Elephants, Safaris, Wilderness",
    highlights: [
      { title: "Wild Elephant Herds", desc: "Encounter large family herds of elephants feeding and bathing near the open reservoir." },
      { title: "Elephant Transit Home", desc: "Watch orphaned baby elephants being fed milk before being rehabilitated and released." },
      { title: "Udawalawe Reservoir", desc: "Enjoy views of the massive lake framed by the distant misty peaks of the Sabaragamuwa range." },
      { title: "Diverse Wildlife", desc: "Spot jackals, spotted deer, wild boars, mugger crocodiles, and majestic eagles." }
    ],
    experiences: ["Morning Safari Game Drive", "Visiting the Elephant Transit Home feeding session", "Birdwatching along the Walawe River", "Camping under the stars"]
  },
  wilpattu: {
    name: "Wilpattu",
    subtitle: "The Land of Lakes & Wilderness",
    description: "Wilpattu is Sri Lanka's largest and oldest national park. Famous for its unique collection of 'Willus'—natural rain-water basins and lakes scattered throughout the park—it offers a quiet, undisturbed safari experience through dense dry-zone forests, providing a tranquil haven for leopards and bears.",
    heroImage: "https://pub-b417daeb2f2d4ba095744c832cdd926c.r2.dev/destination_thumbnail_wilpattu.jpg",
    secondaryImage: "https://pub-b417daeb2f2d4ba095744c832cdd926c.r2.dev/destination_thumbnail_udawalawe.jpg",
    bestSeason: "February to October",
    recommendedDuration: "2 Days",
    vibe: "Wilderness, Serenity, Safaris",
    highlights: [
      { title: "Natural Willus", desc: "Explore the unique rainwater lakes that serve as vital watering holes for wildlife." },
      { title: "Leopards & Sloth Bears", desc: "Search for these elusive predators in a far less crowded environment than Yala." },
      { title: "Kudrimalai Point", desc: "Visit the historic copper-colored cliff where Prince Vijaya landed in 543 BC." },
      { title: "Dry-zone Forest Safaris", desc: "Drive through dense jungle paths covered by high tree canopies." }
    ],
    experiences: ["Full-day Safari Game Drive with Picnic Lunch", "Photography Tours focusing on Rare Birds & Mammals", "Camping in luxury safari tents", "Historic Site walk at Kudrimalai"]
  }
};

const defaultDestination: DestinationDetail = {
  name: "Sri Lanka",
  subtitle: "The Pearl of the Indian Ocean",
  description: "Sri Lanka is a tropical island nation rich in cultural history, diverse landscapes, and warm hospitality. From historic ruins to beautiful coastlines, the island invites you to design a journey custom-made for your passions.",
  heroImage: "https://images.unsplash.com/photo-1544482591-64d5093557e4?q=80&w=1600&auto=format&fit=crop",
  secondaryImage: "https://images.unsplash.com/photo-1588614959060-4d144f28b207?q=80&w=800&auto=format&fit=crop",
  bestSeason: "December to April",
  recommendedDuration: "7 - 14 Days",
  vibe: "Tropical, Diverse, Ancient",
  highlights: [
    { title: "Stunning Coastline", desc: "Relax on untouched beaches with crystal clear warm waters and golden sands." },
    { title: "Cultural Triangle", desc: "Explore ancient ruins, monuments, and UNESCO World Heritage sites." },
    { title: "Tea Country", desc: "Wander through rolling green hills covered by emerald tea estates." }
  ],
  experiences: ["Exploring cultural sites", "Wildlife Safaris", "Relaxing at Boutique resorts"]
};

export function generateStaticParams() {
  const locales = ['en', 'fr'];
  const slugs = Object.keys(destinationData);
  
  const params: { locale: string; slug: string }[] = [];
  locales.forEach(locale => {
    slugs.forEach(slug => {
      params.push({ locale, slug });
    });
  });
  return params;
}

export default async function DestinationDetailPage({
  params
}: {
  params: Promise<{ locale: string; slug: string }>
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  // Normalize slug to match keys (e.g. Galle Fort in menu uses /destinations/galle)
  const normalizedSlug = slug.toLowerCase();
  const dest = destinationData[normalizedSlug] || defaultDestination;

  return (
    <div className="bg-[#FAFAFA] min-h-screen text-[#111111] pb-24">
      {/* 1. Hero Section */}
      <section className="relative w-full h-[65vh] md:h-[80vh] overflow-hidden flex items-end">
        {/* Backdrop Image */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img 
          src={dest.heroImage} 
          alt={dest.name} 
          className="absolute inset-0 w-full h-full object-cover"
          priority
        />
        {/* Soft Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

        {/* Content Box */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 pb-16 md:pb-24 text-white">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest opacity-70 mb-4 font-light">
            <Link href="/" className="hover:underline">Home</Link>
            <ChevronRight size={12} />
            <Link href="/destinations" className="hover:underline">Destinations</Link>
            <ChevronRight size={12} />
            <span className="text-[#6FA5C8] font-normal">{dest.name}</span>
          </div>

          {/* Heading */}
          <h1 
            className="text-4xl md:text-6xl lg:text-7xl font-light leading-tight tracking-tight mb-4"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            {dest.name}
          </h1>
          <p className="text-sm md:text-lg text-gray-300 font-light tracking-widest uppercase">
            {dest.subtitle}
          </p>
        </div>
      </section>

      {/* 2. Overview & Facts */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Left: Description */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <span className="text-xs uppercase tracking-[0.2em] text-[#003366] font-bold mb-4 flex items-center gap-2">
              <Compass size={14} className="text-[#6FA5C8]" />
              Destination Overview
            </span>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-light mb-8 font-sans">
              {dest.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-6 mt-2">
              <Link
                href="/plan-trip"
                className="inline-flex items-center justify-center gap-3 bg-[#003366] text-white px-8 py-4 text-xs uppercase tracking-widest hover:bg-[#6FA5C8] transition-colors duration-300 shadow-sm"
              >
                Plan My Escape to {dest.name}
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>

          {/* Right: Quick Facts Card */}
          <div className="lg:col-span-5 bg-white p-8 md:p-10 border border-gray-100 shadow-sm rounded-sm">
            <h3 
              className="text-2xl font-light text-[#003366] mb-8 pb-3 border-b border-gray-100" 
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              Essential Trip Facts
            </h3>

            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-[#f0f7fc] flex items-center justify-center text-[#003366] shrink-0">
                  <Calendar size={18} />
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-wider text-gray-400 font-bold mb-0.5">Best Time to Visit</div>
                  <div className="text-sm font-medium text-gray-800">{dest.bestSeason}</div>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-[#f0f7fc] flex items-center justify-center text-[#003366] shrink-0">
                  <Clock size={18} />
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-wider text-gray-400 font-bold mb-0.5">Recommended Stay</div>
                  <div className="text-sm font-medium text-gray-800">{dest.recommendedDuration}</div>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-[#f0f7fc] flex items-center justify-center text-[#003366] shrink-0">
                  <Sparkles size={18} />
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-wider text-gray-400 font-bold mb-0.5">Vibe / Ideal For</div>
                  <div className="text-sm font-medium text-gray-800">{dest.vibe}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Staggered Gallery / Dual Image Section */}
      <section className="bg-white border-y border-gray-100 py-20 md:py-28 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Images Left */}
          <div className="lg:col-span-6 relative h-[450px] md:h-[550px] w-full flex items-center">
            {/* Back Main Image */}
            <div className="absolute left-0 top-0 w-[75%] h-[80%] rounded-lg overflow-hidden shadow-md">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src={dest.heroImage} 
                alt={`${dest.name} landscape`} 
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            {/* Front Overlapping Image */}
            <div className="absolute right-0 bottom-0 w-[55%] h-[60%] rounded-lg overflow-hidden shadow-xl border-[6px] border-white z-10">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src={dest.secondaryImage} 
                alt={`${dest.name} atmosphere`} 
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>

          {/* Text Right */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <span className="text-xs uppercase tracking-[0.2em] text-[#003366] font-bold mb-4 flex items-center gap-2">
              <Camera size={14} className="text-[#6FA5C8]" />
              Curated Experiences
            </span>
            <h2 
              className="text-3xl md:text-4xl font-light text-[#003366] mb-6 leading-tight"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              Unique Activities in {dest.name}
            </h2>
            <div className="space-y-4">
              {dest.experiences.map((exp, idx) => (
                <div key={idx} className="flex gap-3 items-center">
                  <div className="w-6 h-6 rounded-full bg-[#f0f7fc] text-[#003366] flex items-center justify-center shrink-0">
                    <Activity size={12} />
                  </div>
                  <span className="text-gray-700 font-light text-base">{exp}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. Highlights Grid */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-28">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.2em] text-[#003366] font-bold mb-3 block">
            The Highlights
          </span>
          <h2 
            className="text-3xl md:text-5xl font-light text-[#003366] leading-tight"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            What Not to Miss
          </h2>
          <div className="w-16 h-[1.5px] bg-[#6FA5C8] mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {dest.highlights.map((item, index) => (
            <div 
              key={index}
              className="bg-white border border-gray-100 p-8 hover:shadow-md transition-shadow duration-300 rounded-sm flex flex-col justify-between"
            >
              <div>
                <span className="text-xs uppercase tracking-widest text-[#6FA5C8] font-medium block mb-2">
                  Highlight 0{index + 1}
                </span>
                <h3 
                  className="text-2xl font-light text-[#003366] mb-3"
                  style={{ fontFamily: 'var(--font-serif)' }}
                >
                  {item.title}
                </h3>
                <p className="text-gray-600 font-light leading-relaxed text-sm md:text-base">
                  {item.desc}
                </p>
              </div>
              
              <div className="mt-6 flex items-center gap-1 text-xs tracking-widest text-[#003366] font-medium uppercase opacity-0 hover:opacity-100 group-hover:opacity-100 transition-opacity">
                Learn More <ChevronRight size={12} />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Plan My Trip CTA Banner */}
      <section className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="bg-[#003366] text-white p-12 md:p-20 text-center relative overflow-hidden rounded-lg shadow-xl">
          {/* Subtle geometric circles */}
          <div className="absolute -right-16 -top-16 w-64 h-64 rounded-full border border-white/5 pointer-events-none" />
          <div className="absolute -left-16 -bottom-16 w-64 h-64 rounded-full border border-white/5 pointer-events-none" />
          
          <div className="relative z-10 max-w-3xl mx-auto">
            <Heart className="mx-auto text-[#6FA5C8] mb-6 animate-pulse" size={32} />
            <h2 
              className="text-3xl md:text-5xl font-light mb-6 leading-tight"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              Curate Your Custom Escape
            </h2>
            <p className="text-white/80 font-light text-base md:text-lg mb-10 max-w-2xl mx-auto">
              Our destination specialists possess intimate local knowledge to meticulously craft an itinerary tailored precisely to your style, pace, and interests.
            </p>
            <Link
              href="/plan-trip"
              className="inline-flex items-center gap-3 bg-white text-[#003366] hover:bg-[#6FA5C8] hover:text-white px-10 py-5 text-xs uppercase tracking-widest font-semibold transition-all duration-300 shadow-md"
            >
              Create My Bespoke Itinerary
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
