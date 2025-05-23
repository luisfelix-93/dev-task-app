
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import { appRoutes } from './routes'
import Layout from './components/Layout'
import PrivateRoute from './components/PrivateRoute'
import Index from './pages/Index'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route element={
          <PrivateRoute>
            <Layout />
          </PrivateRoute>
          }>
          {appRoutes.map(({ path, component: Page }) => (
            <Route key={path} path={path} element={<Page />} />
          ))}
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
