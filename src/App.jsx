import {MainPage} from "./page/mainpage"
import { LoginPage } from "./page/loginpage"
import {Routes,Route,Link} from 'react-router-dom'
import { SingUppage } from "./page/singuppage"
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path='/loginpage' element={<LoginPage />} />
        <Route path='/singuppage' element={<SingUppage />} />
      </Routes>
    </>
  )
}

export default App
