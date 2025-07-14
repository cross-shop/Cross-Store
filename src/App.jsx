import "./App.css";
import { RouterProvider } from "react-router-dom";
import { myRouter } from "./router";
import { useEffect } from "react";

function ScrollToTop() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [myRouter]);

  return null;
}

function App() {
  return (
    <>
      <ScrollToTop />
      <div className="wrapper">
        <RouterProvider router={myRouter} />
      </div>
    </>
  );
}
export default App;
