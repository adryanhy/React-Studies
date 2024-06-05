import React from 'react';

const Footer = ({ children }) => {
  return (
    <footer style={styles.footer}>
      {children}
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: '#222',
    padding: '20px',
    textAlign: 'center',
    bottom: 0,
    width: '100%',
  }
};

export default Footer;
