const Footer = () => {
  return (
    <div className="flex justify-center text-center text-sm mt-2 lg:mt-4">
      {' '}
      <i>
        <p>The Villas - Balian Beach.</p>
        <p>&copy; {new Date().getFullYear()} All rights reserved. </p>
      </i>
    </div>
  );
};

export default Footer;
