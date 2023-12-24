import React from 'react';
import Header from './Header';
import Footer from './Footer';
// import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import  Toaster  from 'react-hot-toast';
const Layout = (props) => {
  return (
    <div>
      <Header />
      <main style={{ minHeight: '80vh' }}>
        <Toaster />
        {props.children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
