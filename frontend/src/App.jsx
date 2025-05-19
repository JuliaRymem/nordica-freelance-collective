import Hero from "./components/Hero";
import FreelancerList from "./features/products/pages/userProfilePage";
import Footer from "./components/Footer";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import SinglePageProject from "./features/products/pages/SinglePageProject";
import FreelancerSearchList from "./features/search/FreelancerSearchList";
import Navbar from "../src/features/products/components/navbar";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Hero />

     {/* <Navbar />

      {/* <h2>Testa FreelancerSearchList</h2> /}
      <FreelancerSearchList />
      {/ <h1>Våra frilansare</h1> /}
      <FreelancerList />

      {/ <SinglePageProject /> */}

      <Footer />
    </QueryClientProvider>
  );
}

export default App;