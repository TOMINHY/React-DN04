import logo from './logo.svg';
import './App.css';
import CardRCC from './components/CardRCC/CardRCC';
import CardRFC from './components/CardRFC/CardRFC';
import HomeComponent from './components/BTComponent/HomeComponent/HomeComponent';
import DatabinDing from './components/DatabinDing/DatabinDing';
import HandlEvent from './components/HandlEvent/HandlEvent';
import DemoState from './components/DemoState/DemoState';
import TangGiamFont from './components/DemoState/TangGiamFont';
import DemoStyling from './components/DemoState/DemoStyling';
import DoiMauXe from './components/DemoState/DoiMauXe/DoiMauXe';
import DemoArray from './DemoArray/DemoArray';
import DemoProps from './DemoProps/DemoProps';
import ShoesShop from './DemoProps/ShoesShop/ShoesShop';
import BTXemChiTiet from './BTXemChiTiet/BTXemChiTiet';
import BTGioHang from './BTGioHang/BTGioHang';
import BTGioHangRedux from './BTGioHangRedux/BTGioHangRedux';
import GameTaiXiu from './GameTaiXiu/GameTaiXiu';
import BTQLND from './BTQLND/BTQLND';
//App là Component chính của ứng dựng
//chứa các thành phần component con
function App() {
  //chỉ được có một thẻ bao bên ngoài
  //thẻ jsx
  return (
    <div className="App">

      <BTQLND/>
      {/* <GameTaiXiu/> */}

      {/* <BTGioHangRedux/> */}

    {/* <BTGioHang/> */}



      {/* <BTXemChiTiet/> */}
    {/* <ShoesShop/> */}
      {/* <DemoProps/> */}
      {/* <DemoArray/> */}
      {/* <DoiMauXe/> */}
      {/* <p className='demoCSS'>demoStyling</p>
    <DemoStyling/>  */}
      {/* <TangGiamFont/> */}
      {/* <DemoState/> */}
      {/* <HandlEvent/> */}
      {/* <DatabinDing/> */}
      {/*component*/}
      {/* <CardRCC/> */}
      {/* <CardRFC/> */}
      {/* <HomeComponent/> */}
    </div>
  );
}

export default App;
