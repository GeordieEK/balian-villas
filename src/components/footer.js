const Footer = () => {
  return (
    <div className="absolute bottom-0 left-0 right-0 text-center text-sm py-1 bg-[rgba(0,0,0,0.1)]">
      {' '}
      <i>
        <p>The Villas - Balian Beach.</p>
        <p>&copy; {new Date().getFullYear()} All rights reserved. </p>
      </i>
    </div>
  );
};

export default Footer;
