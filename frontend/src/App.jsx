import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import SinglePageProject from "./features/products/pages/SinglePageProject";
import FreelancerList from "./features/products/pages/userProfilePage";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <h1>Våra frilansare</h1>
      <FreelancerList />

      <SinglePageProject />
    </QueryClientProvider>
  );
}

export default App;
