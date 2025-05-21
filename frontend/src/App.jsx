import Hero from "./components/Hero";
import FreelancerList from "./features/products/pages/userProfilePage";
import Footer from "./components/Footer";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import SinglePageProject from "./features/products/pages/SinglePageProject";
import FreelancerSearchList from "./features/search/FreelancerSearchList";
import HeroTopbar from "./components/HeroTopbar"; //
import { Route, Routes } from "react-router-dom";
import AboutUsPage from "./features/info/pages/AboutUsPage";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
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
    </QueryClientProvider>
  );
}

export default App;
