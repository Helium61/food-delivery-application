import { useState } from "react"
import Header from "../components/Header"
import Menu from "../components/Menu"

import FoodDisplay from "../components/FoodDisplay";
import Stats from "../components/stats";

const Home = () => {
      
    const[category,setCategory]=useState("All"); 


  return (
    <div>
      <Header/>
      <Menu category={category} setCategory={setCategory}/>
      <FoodDisplay category={category}/>
      <Stats/>
    
    </div>
  )
}

export default Home
