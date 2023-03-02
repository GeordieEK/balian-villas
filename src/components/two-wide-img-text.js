/* eslint-disable @next/next/no-img-element */

const TwoWideImgText = ({ image, alt, text, imageLeft }) => {
  // If image left
  let divClass = 'p-8 flex justify-center';
  if (!imageLeft) divClass += ' lg:order-1';
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 mt-full">
      <div className={divClass}>
        <img src={image} alt={alt} loading="lazy" />
      </div>
      <div className="px-8 md:px-24 text-center flex justify-center items-center">
        {text}
      </div>
    </div>
  );
};

export default TwoWideImgText;
