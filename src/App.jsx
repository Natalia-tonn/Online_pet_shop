

import { BrowserRouter, Routes, Route, RouterProvider } from 'react-router-dom'
import { Provider } from "react-redux";

import { Provider as ReduxProvider } from 'react-redux';

import './App.css'
import HomePage from "./pages/Home/HomePage"
import Header from "./components/Header/Header"
import Footer from './components/Footer/Footer'
import DiscountedProductsPage from "./pages/DiscountedProductsPage/DiscountedProductsPage"
import NotFoundPage from './pages/NotFound/NotFoundPage'
import store from './redux/store'
import CategoriesPage from "./pages/Categories/CategoriesPage"
import AllProductsPage from './pages/AllProducts/AllProductsPage';
import ProductDetailsPage from './pages/ProductDetails/ProductDetails';
import ProductsByCategoryPage from "./pages/ProductsByCategory/ProductsByCategoryPage"
import ShoppingCartPage from "./pages/Cart/ShoppingCartPage"
import ConnectedModal from './components/Modal/ConnectedModal';


function App() {


  return (
    <ReduxProvider store={store}>
  <Provider store={store}>
    <BrowserRouter> 
       <Header/>
        <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path='categories' element={<CategoriesPage/>}/>
        <Route path='products' element={<AllProductsPage/>}/>
        <Route path='categories/:categoryId' element={<ProductsByCategoryPage/>}/>
      

<Route path='discounted-products' element={<DiscountedProductsPage/>}/>
<Route path="products/:productId" element={<ProductDetailsPage />} />


<Route path='cart' element={<ShoppingCartPage/>}/>
        <Route path="*" element={<NotFoundPage />} />
     
        </Routes>
       <Footer/>
  
       <ConnectedModal/>
    </BrowserRouter>
    </Provider>
    </ReduxProvider>

    
  

 
  )
}

export default App
