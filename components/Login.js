import { FiUser, FiLock } from 'react-icons/fi';
import { HiOutlineHome } from 'react-icons/hi'; // Ícono de casa
import { useState } from 'react';
import { useRouter } from "next/router";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === "test@gmail.com" && password === "password") {
      localStorage.setItem("auth", "true");
      router.push("/");
    } else {
      setError("Credenciales incorrectas");
    }
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* video del fondo  */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="fixed top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/video/videoprincipal.mp4" type="video/mp4" />
      </video>

      {/*capa para oscurecer el video de fondo */}
      <div className="absolute inset-0 bg-black/40 z-10" />

      {/*formulario de login */}
      <div className="relative z-20 flex items-center justify-center min-h-screen px-4">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md bg-white/10 backdrop-blur-lg rounded-3xl border border-white/30 shadow-2xl p-10 flex flex-col gap-6"
        >
          <div className="flex justify-center mb-2">
            <div className="bg-white/20 p-4 rounded-full border border-white/40">
              <HiOutlineHome className="text-white text-3xl" />
            </div>
          </div>
          <h2 className="text-3xl font-bold text-white text-center">
            Iniciar sesión
          </h2>
          <p className="text-white/80 text-center text-sm -mt-4 mb-2">
            Bienvenido, por favor ingresa tus credenciales.
          </p>
           {/* correo */}
          <div className="flex items-center border border-white/30 rounded-lg px-4 bg-white/10 focus-within:ring-2 focus-within:ring-white">
            <FiUser className="text-white text-xl" />
            <input
              type="email"
              placeholder="Correo electrónico"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-3 bg-transparent border-none outline-none text-white placeholder-white/70"
              required
            />
          </div>

          {/* Contraseña */}
          <div className="flex items-center border border-white/30 rounded-lg px-4 bg-white/10 focus-within:ring-2 focus-within:ring-white">
            <FiLock className="text-white text-xl" />
            <input
              type="password"
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-3 bg-transparent border-none outline-none text-white placeholder-white/70"
              required
            />
          </div>

          {/* Error */}
          {error && (
            <p className="text-red-400 text-center text-sm">{error}</p>
          )}

          {/* Botón Ingresar */}
          <button
            type="submit"
            className="bg-white text-[#001F3F] font-bold py-3 rounded-xl shadow-md text-lg tracking-wide hover:bg-gray-100 transition"
          >
            Ingresar
          </button>

          {/* Enlace Recuperar */}
          <p className="text-sm text-center text-white/80 mt-2">
            ¿Olvidaste tu contraseña?{' '}
            <a href="/recuperar" className="text-blue-300 hover:underline">
              Recupérala aquí
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}
