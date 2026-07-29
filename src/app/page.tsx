import Navbar from "../components/layout/Navbar";
import VideoShowcase from "../components/sections/VideoShowcase";
import Services from "../components/sections/Services";
import Gallery from "../components/sections/Gallery";
import BookingForm from "../components/sections/BookingForm";
import Testimonials from "../components/sections/Testimonials";
import BlogPreview from "../components/sections/BlogPreview";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
        {/* TODO EL CONTENIDO COMENTADO PARA AISLAR EL ERROR */}
      </main>

      {/* DEBUG: Div azul para verificar que el contenido después del main se renderiza */}
      <div
        style={{
          width: "100%",
          height: "100px",
          backgroundColor: "blue",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          fontSize: "24px",
          fontWeight: "bold",
        }}
      >
        DEBUG: Esto debería verse azul
      </div>

      <VideoShowcase />

      <Services />
      <Gallery />
      <BookingForm />
      <Testimonials />
      <BlogPreview />
    </>
  );
}
