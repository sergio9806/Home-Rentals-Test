import { useEffect } from "react";
import { useRouter } from "next/router";
import Header from "../components/Navbar";
import Properties from "../components/Properties";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    // Si no hay "auth" en localStorage, redirige al login
    if (typeof window !== "undefined" && !localStorage.getItem("auth")) {
      router.replace("/login");
    }
  }, []);
  return (
   <>
  {/* Fondo fijo con imagen */}
  <div
    className="fixed inset-0 z-0 bg-cover bg-center"
    style={{
      backgroundImage: "url('./images/fondo.jpg')",
    }}
  />

  {/* Overlay oscuro y contenido encima */}
  <div className="relative z-10 min-h-screen bg-[black]/50 text-white">
    <Header />
    <div className="max-w-6xl mx-auto py-15 px-4 ">
      <h1 className="text-4xl font-bold text-center py-5 mb-12 drop-shadow">
        Propiedades para alquilar
      </h1>
      <Properties />
    </div>
  </div>
</>

  );
}

