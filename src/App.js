import Home from '../src/pages/Home/Home'
import Products from '../src/pages/Products/Products'
import Product from '../src/pages/Product/Product'
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Checkout from './pages/checkout/Checkout';
import Success from './pages/Success/Success';
import About from './pages/About/About'
import Privacy from './pages/Privacy/Privacy'
import Return from './pages/Return/Return'
import Shipping from './pages//Shipping/Shipping'
import Terms from './pages/Terms/Terms'
import './app.scss' 
import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";



const Layout = () => {
  return (
    <div className='app'>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

const router = createBrowserRouter ([
  {
    path:"/",
    element:<Layout/>,
    children:[
      {
        path: '/',
        element: <Home/>
      },
      {
        path: '/products/:id',
        element: <Products/>
      },
      {
        path: '/product/:id',
        element: <Product/>
      },
      {
        path: '/checkout',
        element: <Checkout/>
      },
      {
        path: '/success',
        element: <Success/>
      },
      {
        path: '/about-us',
        element: <About/>
      },
      {
        path: '/privacy-policy',
        element: <Privacy/>
      },
      {
        path: '/return-policy',
        element: <Return/>
      },
      {
        path: '/shipping-policy',
        element: <Shipping/>
      },
      {
        path: '/terms-of-use',
        element: <Terms/>
      },
    ]
  }
])

function App() {
  return (
    <div>
       <RouterProvider router={router} />
    </div>
  );
}

export default App;
