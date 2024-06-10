import axios from "axios";
import React, { useEffect, useState } from "react";

function App() {
  const [isUsers, setUsers] = useState(undefined);
  useEffect(() => {
    let Task = async () => {
      let response = await axios.get(
        "https://api.coindesk.com/v1/bpi/currentprice.json"
      );
      setUsers(response.data);
    };
    Task();
  });

  return <div>{isUsers && <div>{isUsers.time.updated}</div>}</div>;
}

export default App;
