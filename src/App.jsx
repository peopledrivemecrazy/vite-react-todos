import React, { useState } from "react";
import Button from "./components/Button";
import Todos from "./components/Todos";
// const URL = "https://jsonplaceholder.typicode.com/todos/1";

function App() {
  //here
  const [current, currentPage] = useState(1);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-5">
      <div className="max-w-3xl mx-auto">
        <Button
          text={"fetch todo:"}
          currentPage={current}
          setCurrentPage={currentPage}
        />
        <Todos pageNum={current} />
      </div>
    </div>
  );
}

export default App;
