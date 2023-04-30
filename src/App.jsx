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
  const [filteredDataRes, setFilteredDataRes] = useState();
  const [allDataRes, setAllDataRes] = useState();
  const [enableLoadMore, setEnableLoadMore] = useState(false);

  /////////////////////////////////////////////////
  /////////////////////////////////////////////////

  useEffect(() => {
    getData(API_URL);
  }, []);

  /////////////////////////////////////////////////
  /////////////////////////////////////////////////

  const getData = (url) => {
    try {
      setLoading(true);
      axios
        .get(url)
        .then((res) => {
          setAllDataRes(res.data);
          if (res.data.next && !enableLoadMore) {
            setEnableLoadMore(true);
          } else if (!res.data.next && enableLoadMore) {
            setEnableLoadMore(false);
          }
          setLoading(false);
          setStarshipData((prevState) => {
            return [...prevState, ...res.data.results];
          });
        })
        .catch((err) => {
          console.error(err);
          setLoading(false);
        });
    } catch (error) {
      console.error(error);
    }
  };
  /////////////////////////////////////////////////
  /////////////////////////////////////////////////

  const getSearchInput = (input) => {
    setInput(input);
    getFilteredData(input);
  };
  /////////////////////////////////////////////////
  /////////////////////////////////////////////////
  const onLoadMoreClick = () => {
    if (input === "") {
      getData(allDataRes.next);
    } else {
      getData(filteredDataRes.next);
    }
  };

  const getFilteredData = (searchInput) => {
    axios
      .get(API_URL + `?search=${searchInput}`)
      .then((res) => {
        const data = res.data;
        if (data.next && !enableLoadMore) {
          setEnableLoadMore(true);
        } else if (!data.next && enableLoadMore) {
          setEnableLoadMore(false);
        }
        setFilteredDataRes(data);
        setStarshipData(data.results);
      })
      .catch((err) => {
        console.warn("Error", err);
        setStarshipData([]);
      });
  };

  return (
    <Routes>
      <Route
        path="/"
        element={
          <div className="App">
            <Header onGetSearchInput={getSearchInput} />

            <StarshipList
              input={input}
              onLoadMoreClick={onLoadMoreClick}
              starshipData={starshipData}
              loading={loading}
              enableLoadMore={enableLoadMore}
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
