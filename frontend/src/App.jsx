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

<<<<<<< HEAD
      <Navbar />

      {/* <h2>Testa FreelancerSearchList</h2> */}
      <FreelancerSearchList />
      {/* <h1>Våra frilansare</h1> */}
      <FreelancerList />

      {/* <SinglePageProject /> */}
=======
     {/* <Navbar />

      {/* <h2>Testa FreelancerSearchList</h2> /}
      <FreelancerSearchList />
      {/ <h1>Våra frilansare</h1> /}
      <FreelancerList />

      {/ <SinglePageProject /> */}
>>>>>>> 7b84874a0f3a5568de5013b50d99ab8b49979c26

      <Footer />
    </QueryClientProvider>
  );
}

export default App;