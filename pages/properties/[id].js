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
      {/* Fondo con imagen */}
      <div
        className="min-h-screen bg-cover bg-center relative pt-24 px-4 flex justify-center items-start"
        style={{
          backgroundImage: "url('/images/fondo.jpg')",
        }}
      >
        {/* Capa oscura opcional para mayor contraste */}
        <div className="absolute inset-0 bg-black/40 z-0" />

        {/* Contenedor del formulario */}
        <div className="relative z-10 w-full max-w-5xl bg-white shadow-2xl p-6 md:p-10 flex flex-col md:flex-row gap-8 ">
          {/* Imagen de la propiedad */}
          <img
            src={prop.image}
            alt={prop.name}
            className="w-full md:w-1/2 max-h-[28rem] object-cover rounded-2xl shadow-md border border-gray-300"
          />

          {/* Información */}
          <div className="flex-1 flex flex-col justify-center text-gray-800">
            <h2 className="text-4xl font-bold mb-2 tracking-tight">{prop.name}</h2>

            <div className="flex items-center gap-2 text-gray-500 mb-4">
              <FiMapPin className="text-yellow-400" />
              <span className="text-xl font-medium">{prop.address}</span>
            </div>

            <p className="text-gray-600 text-xl mb-4 leading-relaxed">
              {prop.description}
            </p>

            <p className="text-2xl font-semibold text-yellow-400 mb-6">
              <span className=" text-gray-700 font-normal text-2xl">por tan solo:  </span>
              ${prop.price}
              <span className="text-base text-gray-500 font-normal">  la noche</span>
            </p>

            {/* Widget del clima */}
            <div className="mb-6">
              <WeatherWidget city={prop.city} />
            </div>

            {/* Botón de volver */}
            <button
              className="mt-auto inline-flex items-center gap-2 bg-yellow-200 hover:bg-yellow-500 text-black text-sm md:text-base font-semibold px-6 py-2.5 shadow-md transition duration-300 ease-in-out"
              onClick={() => router.back()}
            >
              <FiArrowLeft className="text-black text-lg" />
              Regresar
            </button>
          </div>
        </div>
      </div>
    </>
  );
}