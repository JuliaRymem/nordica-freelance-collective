import Hero from "./components/Hero";
import FreelancerList from "./features/products/pages/userProfilePage";
import Footer from "./components/Footer";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import SinglePageProject from "./features/products/pages/SinglePageProject";
import FreelancerSearchList from "./features/search/FreelancerSearchList";
import HeroTopbar from "./components/HeroTopbar"; //
import { Route, Routes } from "react-router-dom";
import AboutUsPage from "./features/info/pages/AboutUsPage";
import { AuthProvider } from "./context/authContext";
import ScrollToTop from "./features/products/components/ScrollToTop";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <ScrollToTop />
        {/* Header */}
        <HeroTopbar />
        <Routes>
          {/* Hero-sektion */}
          <Route path="/" element={<Hero />} />
          {/* Andra sektioner */}
          <Route path="/freelancer" element={<FreelancerList />} />
          <Route path="/freelancer/:slug" element={<SinglePageProject />} />
          <Route path="/about" element={<AboutUsPage />} />
        </Routes>
        <Footer />
      </AuthProvider>
    </QueryClientProvider>
  );
}

export default App;
