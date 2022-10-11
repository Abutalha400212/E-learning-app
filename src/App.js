import { RouterProvider } from "react-router-dom";
import "./App.css";
import { route } from "./Layout/Route";
function App() {
  return <RouterProvider router={route}></RouterProvider>
}
export default App;
