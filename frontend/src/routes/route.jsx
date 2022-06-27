import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Edit from '../pages/Edit/Edit'
import Error from '../pages/Error/Error'
import ListOfProducts from '../pages/ListOfProducts/ListOfProducts'
import Main from '../pages/Main/Main'
import Register from '../pages/Register/Register'

export default function RoutesApp() {
   return(
      <>
         <BrowserRouter>
            <Routes>
               <Route path='/' element={ <Main /> }></Route>
               <Route path='/register' element={ <Register /> }></Route>
               <Route path='/edit/:id' element={ <Edit /> }></Route>
               <Route path='/list' element={ <ListOfProducts /> }></Route>
               <Route path='*' element={ <Error /> }></Route>
            </Routes>
         </BrowserRouter>
      </>
   )
}