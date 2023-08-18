import { Link } from "react-router-dom";
import "./App.css";
import CustomRoutes from "./routes/CustomRoutes";

function App() {
  return (
    <div className="flex items-center flex-col pb-6">
      <Link to={'/'} className="bg-black text-white w-full text-center text-4xl p-4 tracking-widest font-bold">
        React Image Gallery
      </Link>
      <CustomRoutes />
    </div>
  );
}

export default App;
