import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout = (props) => {
  return (
    <div>
    <Header></Header>
    
      <main style={{minHeight:'80vh'}}>
      <p>{props.children}</p>
      </main>
      <Footer></Footer>
    </div>
  );
};

export default Layout;
