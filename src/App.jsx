import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./component/shared/Layout";
import { Dashboard } from "./component/Dashboard";
import { Products } from "./component/Products";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout></Layout>}>
          
          <Route index element={<Dashboard></Dashboard>}/>
          <Route path="products" element={<Products></Products>}/>
        </Route>  
        <Route path='login' element={<div>Login</div>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
