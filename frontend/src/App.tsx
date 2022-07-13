import SalesCard from "./components/SalesCard";
import Header from "./components/Header/index";
import './index.css';
function App() {
  return(
    <>
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
