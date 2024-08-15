import { Header } from "./components/Header"
import MyRoutes from "./components/Routes"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return ( <>
    <Header />
    <MyRoutes />
    <ToastContainer 
      position="bottom-right"
      autoClose={3000}
 />
    </> )
}

export default App
