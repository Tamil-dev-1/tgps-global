import React from 'react'
import AppRouter from './Router/AppRouter'
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const App = () => {
    useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);
  return (
    <div>
     <AppRouter />
    </div>
  )
}

export default App
