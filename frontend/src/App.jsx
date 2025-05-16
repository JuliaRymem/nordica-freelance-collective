import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import SinglePageProject from "./features/products/pages/SinglePageProject";
import FreelancerList from "./features/products/pages/userProfilePage";
import FreelancerSearchList from "./features/search/FreelancerSearchList";
import Navbar from "../src/features/products/components/navbar";

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Navbar/>
        <div>
          {/* <h2>Testa FreelancerSearchList</h2> */}
          <FreelancerSearchList />
          {/* <h1>Våra frilansare</h1> */}
          <FreelancerList />

          
        </div>

        <SinglePageProject />
      </QueryClientProvider>
    </>
  );
}

export default App;
