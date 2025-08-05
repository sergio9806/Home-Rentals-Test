import Login from "../components/Login";
import { useEffect } from "react";
import { useRouter } from "next/router";
export default function LoginPage() {

    const router = useRouter();

    useEffect(() => {
      // Si ya está autenticado, redirige al home
      if (typeof window !== "undefined" && localStorage.getItem("auth")) {
        router.replace("/");
      }
    }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F5F5DC]">
      <Login />
    </div>
  );
}
