import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import axios from "axios";
import { API_URL } from "./config";
import Header from "./components/Header/Header";
import StarshipList from "./components/Starships/StarhipList";
import StarshipDetails from "./components/Starships/StarshipDetails";
import ErrorPage from "./components/ErrorPage";

function App() {
  const [input, setInput] = useState("");
  const [starshipData, setStarshipData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [pageNumber, setPageNumber] = useState(0);
  // const [filteredStarshipData, setFilteredStarshipData] = useState([]);

  /////////////////////////////////////////////////
  /////////////////////////////////////////////////

  useEffect(() => {
    getData(API_URL);
  }, []);

  /////////////////////////////////////////////////
  /////////////////////////////////////////////////

  const getData = async (url) => {
    try {
      setLoading(true);
      const { data: res1 } = await axios.get(url);
      const { data: res2 } = await axios.get(url + "?page=2");
      const { data: res3 } = await axios.get(url + "?page=3");
      const { data: res4 } = await axios.get(url + "?page=4");

      setStarshipData((prevState) => [
        ...prevState,
        ...res1.results,
        ...res2.results,
        ...res3.results,
        ...res4.results,
      ]);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
      setPageNumber((prevPageNumber) => prevPageNumber + 1);
    }
  };
  /////////////////////////////////////////////////
  /////////////////////////////////////////////////

  const getSearchInput = (input) => {
    setInput(input);
  };
  /////////////////////////////////////////////////
  /////////////////////////////////////////////////
  const pageNumberHandler = () => {
    setPageNumber((prevPageNumber) => prevPageNumber + 1);
  };

  const filteredStarshipData = starshipData.filter((starship) => {
    if (
      starship.name.toLowerCase().includes(input.toLowerCase()) ||
      starship.model.toLowerCase().includes(input.toLowerCase())
    ) {
      return starship;
    }
  });
  return (
    <Routes>
      <Route
        path="/"
        element={
          <div className="App">
            <Header onGetSearchInput={getSearchInput} />

            <StarshipList
              input={input}
              onPageNumberHandle={pageNumberHandler}
              starshipData={filteredStarshipData}
              loading={loading}
              pageNumber={pageNumber}
            />
          </div>
        }
      />
      <Route
        path="/starshipDetails/:starshipName"
        element={<StarshipDetails starshipData={starshipData} />}
      />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}

export default App;
