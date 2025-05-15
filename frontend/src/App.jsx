import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import SinglePageProject from "./features/products/pages/SinglePageProject";
import FreelancerList from "./features/products/pages/userProfilePage";
import FreelancerSearchList from "./features/search/FreelancerSearchList";

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <div>
          <h1>Våra frilansare</h1>
          <FreelancerList />

          <h2>Testa FreelancerSearchList</h2>
          <FreelancerSearchList />
        </div>

        <SinglePageProject />
      </QueryClientProvider>
    </>
  );
}

export default App;
