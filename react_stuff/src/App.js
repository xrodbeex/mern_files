import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import { useParams } from "react-router";
import './App.css';

const Home = (props)=> {
  return (
    <div>
      <h1 style={{color:"red"}}>
        Welcome
      </h1>
      <Link to={"/about"}>Go to about</Link>
    </div>
  )
}


const About = (props) => {
  return (
    <div>
      <h1 style={{color: "blue"}}>
        About Component
      </h1>
      <Link to={"/"}>Go to home</Link>
    </div>
  )
}


const Num = (props) => {
  const { hey } = useParams();

  return (
    <div>
      <h1>the number is { hey } </h1>
      <Link to={"/Home"}>Go to Home</Link>
    </div>
  )
}

const Hello = (props) => {
  const { word } = useParams();

  return (
    <div style={{ background: "red"}}>
      <h1 style={{color: "white"}}>The word is { word }</h1>
      <Link to={"/Home"}>Go to Home</Link>
    </div>
  )
}


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route path="/home" element={<Home />}/>
        <Route path="/about" element={<About />} />
        <Route path="/Num/:hey" element={<Num />} />
        <Route path="Hello/:word" element={<Hello />} />
      </Routes>

    </div>
    </BrowserRouter>
  )
}
export default App;