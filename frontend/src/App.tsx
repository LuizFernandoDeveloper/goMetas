import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SalesCard from "./components/SalesCard";
import Header from "./components/Header/index";
import './index.css';

function App() {
  return(
    <>
      <ToastContainer/>

      <Header/>

      <main>

        <section id='sales'>

          <div className="goMetas-container">

            <SalesCard/>

          </div>

        </section>

      </main>
      
    </>
  )
}

export default App;
