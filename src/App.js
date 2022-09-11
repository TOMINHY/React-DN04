import logo from './logo.svg';
import './App.css';
import CardRCC from './components/CardRCC/CardRCC';
import CardRFC from './components/CardRFC/CardRFC';
import HomeComponent from './components/BTComponent/HomeComponent/HomeComponent';
import DatabinDing from './components/DatabinDing/DatabinDing';
import HandlEvent from './components/HandlEvent/HandlEvent';
import DemoState from './components/DemoState/DemoState';
//App là Component chính của ứng dựng
//chứa các thành phần component con
function App() {
  //chỉ được có một thẻ bao bên ngoài
  //thẻ jsx
  return (
    <div className="App">

    {/* <DemoState/> */}


    {/* <HandlEvent/> */}
      {/* <DatabinDing/> */}
      {/*component*/}
        {/* <CardRCC/> */}
        {/* <CardRFC/> */}
    <HomeComponent/>
    </div>
  );
}

export default App;
