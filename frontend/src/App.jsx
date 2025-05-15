import FreelancerList from "./features/products/pages/userProfilePage";
import FreelancerSearchList from "./features/search/FreelancerSearchList";

function App() {
  return (
    <div>
      <h1>Våra frilansare</h1>
      <FreelancerList />
      
      <h2>Testa FreelancerSearchList</h2>
      <FreelancerSearchList />
    </div>
  );
}

export default App;
