import cosco from '../assets/logos/cosco.svg';
import maersk from '../assets/logos/maersk.svg';
import msc from '../assets/logos/msc.svg';
import oocl from '../assets/logos/oocl.svg';
import evergreen from '../assets/logos/evergreen.svg';
import pil from '../assets/logos/pil.svg';

const lines = [
  { name: 'Mediterranean Shipping Company (MSC)', logo: msc },
  { name: 'Maersk', logo: maersk },
  { name: 'Cosco Shipping Logistics', logo: cosco },
  { name: 'Orient Overseas Container Line (OOCL)', logo: oocl },
  { name: 'Evergreen', logo: evergreen },
  { name: 'Pacific International Lines (PIL)', logo: pil },
];

export default function Partners() {
  return (
    <section className="bg-gray-50 py-20 px-6 md:px-12">
      <div className="">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Our Trusted Partners
        </h2>
        <div>
          <div className="flex flex-wrap gap-8 items-center justify-between">
            {lines.map((line, index) => (
              <div key={index} className="w-40 flex items-center justify-center">
                <img
                  src={line.logo}
                  alt={line.name}
                  className="max-h-full max-w-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
