import { Link } from '@/i18n/routing';

const otherDestinations = [
  { id: 'galle', name: 'Galle', image: 'https://pub-b417daeb2f2d4ba095744c832cdd926c.r2.dev/destination_thumbnail_galle.jpg' },
  { id: 'mirissa', name: 'Mirissa', image: 'https://pub-b417daeb2f2d4ba095744c832cdd926c.r2.dev/destination_thumbnail_mirissa.jpg' },
  { id: 'yala', name: 'Yala', image: 'https://pub-b417daeb2f2d4ba095744c832cdd926c.r2.dev/destination_thumbnail_yala.jpg' },
  { id: 'nuwara-eliya', name: 'Nuwara Eliya', image: 'https://pub-b417daeb2f2d4ba095744c832cdd926c.r2.dev/destination_thumbnail_nuwaraeliya.jpg' },
  { id: 'bentota', name: 'Bentota', image: 'https://pub-b417daeb2f2d4ba095744c832cdd926c.r2.dev/destination_thumbnail_bentota.jpg' },
  { id: 'jaffna', name: 'Jaffna', image: 'https://pub-b417daeb2f2d4ba095744c832cdd926c.r2.dev/destination_thumbnail_jaffna.jpg' },
  { id: 'kalpitiya', name: 'Kalpitiya', image: 'https://pub-b417daeb2f2d4ba095744c832cdd926c.r2.dev/destination_thumbnail_kalpitiya.jpg' },
  { id: 'udawalawe', name: 'Udawalawe', image: 'https://pub-b417daeb2f2d4ba095744c832cdd926c.r2.dev/destination_thumbnail_udawalawe.jpg' },
  { id: 'wilpattu', name: 'Wilpattu', image: 'https://pub-b417daeb2f2d4ba095744c832cdd926c.r2.dev/destination_thumbnail_wilpattu.jpg' },
];

export default function DestinationGrid() {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 md:px-12 py-16 pb-32">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {otherDestinations.map((dest) => (
          <Link 
            key={dest.id} 
            href={`/destinations/${dest.id}`}
            className="group relative h-[300px] md:h-[400px] rounded-lg overflow-hidden block"
          >
            {/* Image */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src={dest.image} 
              alt={dest.name} 
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            
            {/* Dark Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300" />
            
            {/* Text Content */}
            <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
              <h3 className="text-white text-lg font-light tracking-widest uppercase">
                {dest.name}
              </h3>
              <div className="w-12 h-[1px] bg-white transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
