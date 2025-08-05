import Link from "next/link";
import properties from "../data/properties.json";
import { FiMapPin, FiArrowRight } from "react-icons/fi";

export default function Properties() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-4">
      {properties.map((prop) => (
        <div
          key={prop.id}
          className="bg-white text-black overflow-hidden shadow-lg border border-gray-200 flex flex-col"
        >
          {/* Imagen */}
          <img
            src={prop.image}
            alt={prop.name}
            className="w-full h-60 object-cover"
          />

          {/* Contenido */}
          <div className="p-6 flex flex-col flex-grow text-center">
            <h3 className="text-2xl font-serif font-semibold mb-1">{prop.name}</h3>
            <div className="w-12 h-0.5 bg-gray-300 mx-auto my-2"></div>

            <span className="text-sm text-gray-500 mb-2">{prop.type}</span>
            <p className="text-gray-600 mb-4">{prop.description}</p>

            <div className="mt-auto">
              <Link href={`/properties/${prop.id}`}>
                <button className="w-full bg-yellow-200 text-black font-semibold px-4 py-2 rounded hover:bg-yellow-500 transition flex items-center justify-center gap-2">
                  Ver más detalles <FiArrowRight />
                </button>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}