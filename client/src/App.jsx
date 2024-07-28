import { Routes, Route } from "react-router-dom";
import Home from "./components/home/Home"

function App() {

  return (
    <>

      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/logour" element={<Logout />} />
        <Route path="/games" element={<GameList />} />
        <Route path="/games/create" element={<GameCrete />} /> */}
      </Routes>
    </>
  )
}

export default App
