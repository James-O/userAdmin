import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "../layout/Navbar"
import Contacts from "../pages/Contacts"
import Chart from "../pages/Chart"
import Dashboard from '../pages/Dashboard'
import Blank from '../pages/Blank'
import Tables from '../pages/Tables'
import Register from '../pages/Register'
import Login from '../pages/Login'
import Icons from '../pages/Icons'
import Frequentquestn from '../pages/Frequentquestn'
import Error from '../pages/Error'
import Accordion from '../pages/Accordion'
import Bages from '../pages/Bages'
import Alert from '../pages/Alert'
import Apexcharts from '../pages/Apexcharts'
import Bootstraps from '../pages/Bootstraps'
import Boxicons from '../pages/Boxicons'
import Buttons from '../pages/Buttons'
import Breadcrumbs from '../pages/Breadcrumbs'
import Cards from '../pages/Cards'
import Carousel from '../pages/Carousel'
import Modals from '../pages/Modals'
import Tabs from '../pages/Tabs'
import Tooltips from '../pages/Tooltips'
import Spinners from '../pages/Spinners'
import Listgroups from '../pages/Listgroups'
import Paginations from '../pages/Paginations'
import Progress from '../pages/Progress'
import Remix from '../pages/Remix'
import Echarts from '../pages/Echarts'
import Datatables from '../pages/Datatables'
import Generaltables from '../pages/Generaltables'
import Formeditors from '../pages/Formeditors'
import Formelements from '../pages/Formelements'
import Formlayouts from '../pages/Formlayouts'
import Validations from '../pages/Validations'
import Help from '../pages/Help'
import Myprofile from '../pages/Myprofile'
import Layoutpage from '../layout/Layoutpage'


 function Router() {
  return (
   
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layoutpage/>}>
        <Route index element={<Dashboard/>}/>
        <Route path='/contact' element={<Contacts/>}/>
        <Route path='/chart' element={<Chart/>}/>
        <Route path='/echarts' element={<Echarts/>}/>
        <Route path='/cards' element={<Cards/>}/>
        <Route path='/carousel' element={<Carousel/>}/>
        <Route path='/formeditors' element={<Formeditors/>}/>
        <Route path='/formelements' element={<Formelements/>}/>
        <Route path='/formlayouts' element={<Formlayouts/>}/>
        <Route path='/validations' element={<Validations/>}/>
        <Route path='/blank' element={<Blank/>}/>        
        <Route path='/tables' element={<Tables/>}/>
        <Route path='/tabs' element={<Tabs/>}/>
        <Route path='/spinners' element={<Spinners/>}/>
        <Route path='/tooltips' element={<Tooltips/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/listgroups' element={<Listgroups/>}/>
        <Route path='/icons' element={<Icons/>}/>
        <Route path='/paginations' element={<Paginations/>}/>
        <Route path='/progress' element={<Progress/>}/>
        <Route path='/bages' element={<Bages/>}/>
        <Route path='/breadcrumbs' element={<Breadcrumbs/>}/>
        <Route path='/boxicons' element={<Boxicons/>}/>
        <Route path='/buttons' element={<Buttons/>}/>
        <Route path='/bootstraps' element={<Bootstraps/>}/>
        <Route path='/alert' element={<Alert/>}/>
        <Route path='/apexcharts' element={<Apexcharts/>}/>
        <Route path='/accordion' element={<Accordion/>}/>
        <Route path='/modals' element={<Modals/>}/>
        <Route path='/remix' element={<Remix/>}/>
        <Route path='/generaltables' element={<Generaltables/>}/>
        <Route path='/datatables' element={<Datatables/>}/>
        <Route path='/remix' element={<Remix/>}/>
        <Route path='/frequentquestn' element={<Frequentquestn/>}/>
        <Route path='/help' element={<Help/>}/>
        <Route path='/myprofile' element={<Myprofile/>}/>
        <Route path='/error' element={<Error/>}/>

        </Route>
      </Routes>
    </BrowserRouter>
   
  )
}
export default Router