import { 
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Introduction from "./pages/Introduction";
import HomePage from "./pages/HomePage";
import { UserProvider } from "./context/UserContext";

export default function App() {
  return (
    <>
      <UserProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Introduction />} />
            <Route path="/home" element={<HomePage />} />
          </Routes>
        </Router>
      </UserProvider>
    </>
  )
}