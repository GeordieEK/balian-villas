/* eslint-disable @next/next/no-img-element */

const TwoWideImgText = ({ image, alt, text, imageLeft }) => {
  return (
    <div className="flex justify-center mt-full">
      {imageLeft && (
        <div className="w-1/2 h-auto p-8 flex justify-center">
          <img src={image} alt={alt} loading="lazy" />
        </div>
      )}
      <div className="w-1/2 px-32 text-center flex justify-center items-center">
        {text}
      </div>
      {!imageLeft && (
        <div className="w-1/2 h-auto p-8 flex justify-center">
          <img src={image} alt={alt} loading="lazy" />
        </div>
      )}
    </div>
  );
};

export default TwoWideImgText;
