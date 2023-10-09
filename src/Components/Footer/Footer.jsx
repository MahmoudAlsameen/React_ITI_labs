import React from 'react'

export default function Footer() {
    const footerStyle = {
        backgroundColor: '#2C0047',
        color: 'white'
      };
    
      return (
        <footer className="fixed-bottom text-white" style={footerStyle}>
        <div className="container text-center">
          <p style={{color: '#f7ea66'}}>&copy; 2023 Mahmoud Alsameen</p>
        </div>
      </footer>
      );
}
