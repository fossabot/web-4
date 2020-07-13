import React from 'react';
import '../src/css/tailwind.css';

const Layout =  ({ children }) => {
  return (
    <div className="px-20 py-10 bg-gray-100">
      {children}
    </div>
  )
}

export default Layout

