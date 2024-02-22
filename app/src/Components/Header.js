import React from 'react';

function Header() {
    return (
        <header className="header">
        <div className="logo">
        <img src="#"/>
        </div>
        <nav>
        <ul>
        <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/booking" element={<BookingPage />}></Route>
        </Routes>
        </ul>
        </nav>
      </header>
    );
  }
  
  export default Header;