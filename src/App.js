import logo from './logo.svg';
import './App.css';
import Country from './user/component/Country';
import City from './user/component/City';
import CityFun from './user/component/CityFun';
import CountryFun from './user/component/CountryFun';
import Propsdemo from './user/component/Propsdemo';
import Statefun from './user/component/Statefun';
import Counter from './user/component/Counter';


function App() {
  return (
    <>
        <CityFun />
        <CountryFun />
        <City />
        <Country />
        <h1> Props Demo</h1>
        <Propsdemo name={"Surat"} email="abc@gmail.com" />
        <Propsdemo name={"Vapi"} email="vapi@gmail.com" />
        <Propsdemo name={"bardoli"} email="bardoli@gmail.com" />
        <Statefun />
        <Counter />
    </>
  );
}

export default App;
