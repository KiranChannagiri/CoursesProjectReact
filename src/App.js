import "./App.css";
import Cards from "./components/Card";
import Navbar from "./components/Navbar";
import Filter from "./components/Filter";
import { filterData,apiUrl } from "./data";
import { useEffect, useState } from "react";
import Spinner from "./components/Spinner";
function App() {
  let [course, setCourse] = useState([]);
  let [loading,setLoading]=useState(true);
  useEffect(() => {
    async function dataFecth() {
      //to make the api call use the useEffect hook
      try {
        let data = await fetch(apiUrl);
        let output = await data.json();
        let final = output.data;
        let allCourse = [];
        for (let category in final) {
          allCourse = [...allCourse, ...final[category]];
        }
        setCourse(allCourse);
      } catch {
        console.log("error in fetching the data");
      }
      setLoading(false);
    }
    dataFecth();
  }, []);

  
  return (
    <div className="App">
      <Navbar></Navbar>
      <Filter filterDatadate={filterData}></Filter>
      <div>
        {
          loading ? (<Spinner></Spinner>) : (<Cards courseses={course}></Cards>)
        }
      </div>
      
    </div>
  );
}

export default App;

// if we want to use any packages then we should install by executing a command example for pacakges are react-tostify