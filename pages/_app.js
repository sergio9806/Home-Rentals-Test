import "@/styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <div className="min-h-screen bg-[#F5F5DC]">
      <Component {...pageProps} />
    </div>
  );
}
export default MyApp;

