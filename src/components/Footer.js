import React from 'react';

const Footer = () => {
  return (
    <div className="container-fluid mt-5 p-0 sticky-top">
      <footer className="bg-light text-center text-white sticky-bottom">
       
        <div className="container p-4 pb-0">
       
          <section className="mb-4">
            
            <a
              className="btn btn-primary btn-floating m-1"
              style={{ backgroundColor: '#3b5998' }}
              href="#!"
              role="button"
            >
              <i className="fab fa-facebook-f"></i>
            </a>

           
            <a
              className="btn btn-primary btn-floating m-1"
              style={{ backgroundColor: '#55acee' }}
              href="#!"
              role="button"
            >
              <i className="fab fa-twitter"></i>
            </a>

           
            <a
              className="btn btn-primary btn-floating m-1"
              style={{ backgroundColor: '#dd4b39' }}
              href="#!"
              role="button"
            >
              <i className="fab fa-google"></i>
            </a>

            <a
              className="btn btn-primary btn-floating m-1"
              style={{ backgroundColor: '#ac2bac' }}
              href="#!"
              role="button"
            >
              <i className="fab fa-instagram"></i>
            </a>

         
            <a
              className="btn btn-primary btn-floating m-1"
              style={{ backgroundColor: '#0082ca' }}
              href="#!"
              role="button"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>

    
            <a
              className="btn btn-primary btn-floating m-1"
              style={{ backgroundColor: '#333333' }}
              href="#!"
              role="button"
            >
              <i className="fab fa-github"></i>
            </a>
          </section>
         
        </div>
       
        <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
          © 2023 Copyright:
          <a className="text-white" href="#">
           Muskan Garg
          </a>
        </div>
        
      </footer>
    </div>
  );
};

export default Footer;
