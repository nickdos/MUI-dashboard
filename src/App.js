import "./styles.css";
import Dashboard from "./components/Dashboard";
import { useState, useEffect } from "react";

const App = () => {
  const [results, setResults] = useState({});
  // const [meta, setMeta] = useState({});

  useEffect(() => {
    const getRecords = async () => {
      const searchResults = await fetchRecords();
      setResults(searchResults);
    };

    getRecords();
  }, []);

  // Fetch Tasks
  const fetchRecords = async () => {
    const res = await fetch(
      "https://biocache-ws.ala.org.au/ws/occurrences/search?q=class:Mammalia+AND+country:Australia&pageSize=50"
    );
    const data = await res.json();

    return data;
  };

  // Fetch Record
  // const fetchRecord = async (id) => {
  //   const res = await fetch(
  //     `https://biocache-ws.ala.org.au/ws/occurrences/${id}`
  //   );
  //   const data = await res.json();

  //   return data;
  // };

  return (
    <>
      <Dashboard results={results} />
    </>
  );
};

export default App;
