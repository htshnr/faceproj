import { useEffect, useState } from "react";
import { entries, clear } from "idb-keyval";

const ClearPage = () => {
  const [data, setData] = useState([]);

  // Function to fetch all entries from IndexedDB
  const fetchData = async () => {
    const allEntries = await entries();  // Fetch all key-value pairs
    setData(allEntries);  // Update state with the entries
  };

  // Function to clear all data in IndexedDB
  const handleClearData = async () => {
    await clear();  // Clear all data from IndexedDB
    fetchData();    // Refresh the displayed data
  };

  useEffect(() => {
    fetchData();  // Load data when the page is first rendered
  }, []);

  return (
    <div>
      <h1>Clear IndexedDB Data</h1>
      <div>
        <h2>Stored Data:</h2>
        <pre>{JSON.stringify(data, null, 2)}</pre> {/* Display entries */}
      </div>
      <button onClick={handleClearData}>Clear All Data</button>
    </div>
  );
};

export default ClearPage;
