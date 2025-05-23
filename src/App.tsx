
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import { appRoutes } from './routes'
import Layout from './components/Layout'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route element={<Layout />}>
          {appRoutes.map(({ path, component: Page }) => (
            <Route key={path} path={path} element={<Page />} />
          ))}
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
