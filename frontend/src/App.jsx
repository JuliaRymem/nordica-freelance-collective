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

      {/* {/* <Navbar />  */}

      <FreelancerSearchList />

      <FreelancerList />

      {/* { <SinglePageProject /> } */}

      <Footer />
    </QueryClientProvider>
  );
}

export default App;
