import { useRouter } from "next/router";
import { FiHome } from "react-icons/fi";

export default function Header() {
  const router = useRouter();

  const logout = () => {
    localStorage.removeItem("auth");
    router.push("/login");
  };

  return (
    <header className="w-full flex justify-between items-center px-8 py-4   bg-[black]/10 shadow-lg fixed z-2">
      <div
        className="flex items-center gap-2 cursor-pointer"
        onClick={() => router.push("/")}
      >
        <FiHome className="text-yellow-200 text-2xl" />
        <span className="text-white text-xl font-bold tracking-wide">
          Home Rentals
        </span>
      </div>
      <button
        className="bg-[#000] text-white hover:bg-yellow-200 hover:text-black transition-colors font-semibold px-5 py-2 rounded-md shadow"
        onClick={logout}
      >
        Cerrar sesión
      </button>
    </header>
  );
}