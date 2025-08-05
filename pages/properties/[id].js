import { useEffect } from "react";
import { useRouter } from "next/router";
import properties from "../../data/properties.json";
import WeatherWidget from "../../components/WeatherWidget";
import Header from "../../components/Navbar";
import { FiMapPin, FiArrowLeft } from "react-icons/fi";

export default function PropertyDetail() {
  const router = useRouter();
  const { id } = router.query;
  const prop = properties.find(p => p.id === Number(id));

  useEffect(() => {
    if (typeof window !== "undefined" && !localStorage.getItem("auth")) {
      router.push("/login");
    }
  }, []);

  if (!prop) return <p className="p-6 text-[#001F3F]">Propiedad no encontrada</p>;

  return (
    <>
      <Header />
      <div className="min-h-screen bg-[#F5F5DC] flex justify-center items-start pt-20 px-2">
        <div className="w-full max-w-3xl bg-white border border-[#E0E0E0] rounded-3xl shadow-2xl p-8 flex flex-col md:flex-row gap-10">
          {/* Imagen */}
          <img
            src={prop.image}
            alt={prop.name}
            className="w-full md:w-1/2 max-h-96 object-cover rounded-2xl shadow-md border-4 border-[#001F3F]"
            style={{ background: "#FDF5E6" }}
          />

          {/* Info */}
          <div className="flex-1 flex flex-col justify-center">
            <h2 className="text-3xl font-extrabold text-gray-800 mb-1 drop-shadow">
              {prop.name}
            </h2>
            <div className="flex items-center gap-2 mb-3">
              <FiMapPin className="text-yellow-500" />
              <span className="text-[#708090] font-medium">{prop.address}</span>
            </div>
            <p className="text-[#708090] text-base mb-4">{prop.description}</p>
            <p className="text-2xl font-bold text-yellow-500 mb-6">
              ${prop.price} <span className="text-base text-[#708090] font-normal">/noche</span>
            </p>
            {/* Widget Clima */}
            <WeatherWidget city={prop.city} />
            <button
              className="mt-8 flex items-center gap-2 bg-[#001F3F] hover:bg-[#274472] text-white font-semibold px-6 py-2 rounded-lg shadow transition"
              onClick={() => router.back()}
            >
              <FiArrowLeft className="text-white" /> Volver
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
