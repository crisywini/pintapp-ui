import './App.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home/Home'
import Layout from './components/layout/layout'
import ItemForm from './components/items/itemForm/ItemForm'

function App() {

  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/items" element={<ItemForm/>}/>
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App
