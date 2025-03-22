import ProdutList from "./components/ProdutList"
import YourCard from "./components/YourCard"

import { useFetch } from "./hooks/useFetch";

function App() {
  const {
    data: desserts, 
    error, 
    isPending} = useFetch("http://localhost:3000/desserts")
  return (
    <div className="container grid-container">
      <ProdutList desserts={desserts} isPending={isPending}/>
      <YourCard/>
    </div>
  )
}

export default App