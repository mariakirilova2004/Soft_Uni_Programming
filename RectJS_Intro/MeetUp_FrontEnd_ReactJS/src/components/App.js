import Navigation from "./Navigation";
import Header from './Header';
import Desc from "./Desc";
import Speakers from "./Speakers";
import Tickets from "./Tickets";
import Schedule from "./Schedule";
import Footer from "./Footer";

function App() {
  return(
    <div>
    <Navigation/>
    <Header/>
  <div className="container">
    {/* <!-- Start: Desc --> */}
    <Desc/>
    {/* <!-- End: Desc --> */}

    {/* <!-- Start: Speakers --> */}
    <Speakers/>
    {/* <!-- End: Speakers --> */}
  </div>

  {/* <!-- Start: Tickets --> */}
  <Tickets/>
  {/* <!-- End: Tickets --> */}

  {/* <!-- Start: Schedule --> */}
  <Schedule/>
  {/* <!-- End: Schedule --> */}

  {/* <!-- Start: Footer --> */}
  <Footer/>
</div>
  ); 
}

export default App;
