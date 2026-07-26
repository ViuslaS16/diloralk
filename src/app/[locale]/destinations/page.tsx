import { setRequestLocale } from 'next-intl/server';
import DestinationSlider from '@/components/destinations/DestinationSlider';
import DestinationGrid from '@/components/destinations/DestinationGrid';

export default async function DestinationsPage({
  params
}: {
  params: Promise<{locale: string}>
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <div className="bg-white min-h-screen">
      <div className="w-full h-[400px] md:h-[600px] relative mt-20 md:mt-24">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img 
          src="https://pub-b417daeb2f2d4ba095744c832cdd926c.r2.dev/destination_banner.jpg" 
          alt="Discover Sri Lanka"
          className="w-full h-full object-cover object-top"
        />
      </div>

      {/* Title Section */}
      <div className="max-w-4xl mx-auto px-4 text-center mt-16 md:mt-24 mb-12">
        <h1 className="text-3xl md:text-5xl font-light text-[#002b5c] mb-6" style={{ fontFamily: 'var(--font-serif)' }}>
          Discover Sri Lanka&apos;s
          <br />
          <span className="font-medium">Timeless Wonders, Coast to Highlands</span>
        </h1>
        <p className="text-gray-600 font-light leading-relaxed text-sm md:text-base max-w-3xl mx-auto">
          Sri Lanka may be a small island, but it holds a world of diverse experiences within its shores. 
          From the golden beaches of the coast to the misty, tea-covered hills of the central highlands, 
          every destination offers a unique adventure. Whether you are exploring ancient ruins, taking thrilling 
          wildlife safaris, or simply soaking in the tropical sun, the timeless wonders of Sri Lanka are waiting 
          to be discovered.
        </p>
      </div>

      {/* Featured Destination Slider */}
      <DestinationSlider />

      {/* Rest of the Destinations Grid */}
      <DestinationGrid />
    </div>
  );
}
