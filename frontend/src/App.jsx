import Hero from "./components/Hero";
import FreelancerList from "./features/products/pages/userProfilePage";
import Footer from "./components/Footer";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import SinglePageProject from "./features/products/pages/SinglePageProject";
import FreelancerSearchList from "./features/search/FreelancerSearchList";
import HeroTopbar from "./components/HeroTopbar"; //

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      {/* Header */}
      <HeroTopbar />

      {/* Hero-sektion */}
      <Hero />

      {/* Andra sektioner */}
      <div>
        <h1>Våra frilansare</h1>
        <FreelancerList />


        <FreelancerSearchList />
        <SinglePageProject />
      </div>

      <Footer />
    </QueryClientProvider>
  );
}

export default App;
