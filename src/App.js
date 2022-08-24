import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import City from "./City";
function App() {
  const key = "84a91b51124f2bc14e2104a40efa11c9";
  const [search, setSearch] = useState("elazığ");
  const [city, setCity] = useState();
  useEffect(() => {
    async function getApi() {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${key}&units=metric`
        );
        setCity(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    getApi();
  }, [search]);
  console.log(search);
  return (
    <div className="App">
      <div>
        <input
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          placeholder="Enter a City"
          style={{
            border: "1px solid",
            padding: "5px",
            marginTop: "10px",
            borderRadius: "5px",
          }}
        />
        {city && <City city={city} />}
      </div>
    </div>
  );
}

export default App;
