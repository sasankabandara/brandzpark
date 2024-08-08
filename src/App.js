
import Banner from "./Banner/Banner";
import Feedback from "./Feedback/Feedback";
//import NavBar from "./NavBar/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import Logos from "./logos/Logos";
import BrandzparkServices from "./Services/BrandzparkServices";
//import RecentWorks from "./RecentWorks/RecentWorks";

function App() {
  return (
    <div className="App">
      <Banner />
    <Logos/>
    <BrandzparkServices/>

    </div>
  );
}

export default App;
