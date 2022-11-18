import { Route, Routes } from "react-router-dom";
import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.component";
import SingIn from "./routes/singIn/singIn-component";


const App = () => {
  return(
    <Routes>
      <Route path="/" element={ <Navigation />} >
        <Route index element={ <Home/> } />
        <Route path="shop" element ={ <div><h1>Shop!!</h1></div> } />
        <Route path="singIn" element ={ <SingIn/> } />
      </Route>
    </Routes>
  )
}

export default App;
