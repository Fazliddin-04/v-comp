import React, { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from '../../pages/Home'
import Product from '../../pages/Product'
import Profile from '../../pages/Profile'

function Content() {
  // Har bir sahifaga o'tganda yuqoriga o'tish uchun (pastda qolib ketmaslik uchun)
  const location = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location])

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/product" element={<Product />} />
    </Routes>
  )
}

export default Content
