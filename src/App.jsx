import { Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Home from "./pages/Home"
import About from "./pages/About"
import Loader from "./components/Loader/Loader"
import NotFound from "./pages/NotFound"

function App() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
