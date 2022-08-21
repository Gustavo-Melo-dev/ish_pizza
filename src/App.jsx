import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import LayoutPage from './components/layout/LayoutPage/LayoutPage'
import './styles/global.css'

import Index from './pages/Index'
import Form from './pages/Form'


function App() {
  return (
    <div className="App">
      <LayoutPage>
        <Router>
          <Routes>
            <Route path={'/'} element={<Index />} exact />
            <Route path={'/pedir-pizza/:id'} element={<Form />} exact />
          </Routes>
        </Router>
      </LayoutPage>
    </div>
  )
}

export default App
