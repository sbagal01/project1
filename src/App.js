import './App.css';
import Header from './components/Header/Header.js';
import  Body from './components/body/body.js';
import Footer from './components/Footer/Footer.js'
import Navbar from './components/Navbar/Navbar.js';
import Carousel from './components/Carousel/Carousel.js'
import Category from './components/Categories/Category.js';
import {Myinterceptor,myInterceptor2,myInterceptor3} from './components/http/Myinterceptor.js';


Myinterceptor();
myInterceptor2();
myInterceptor3();
function App({name}) {
  return (
    <div className="App">
    {/* <Header /> */}
    <Navbar />

    {/* <Category/> */}
    {/* <Carousel/> */}
    <Body/>
    {/* <Footer /> */}
    </div>
  );
}

export default App;
