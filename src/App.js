import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/authContext";
import { Signup } from "./pages/Signup";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/signup'>
            
          </Route>
            <Signup />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
