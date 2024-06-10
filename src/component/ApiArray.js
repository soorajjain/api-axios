//for Array of object

import axios from "axios";
import React, { useEffect, useState } from "react";

function App() {
  const [isusers, setusers] = useState([]);
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/todos").then((res) => {
      setusers(res.data);

    });
  });
  return (
   <div>
  {isusers &&
    isusers.map((users) => (
      <div key={users.id}>
        <p>{users.title}</p>
      </div>
    ))}
</div>

  );
}

export default App;
