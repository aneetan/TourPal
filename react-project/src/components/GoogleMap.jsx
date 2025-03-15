import React from 'react';

const GoogleMap = ({ src }) => {
  return (
    <div>
      <iframe
        src={src}
        style={{ border: 0 }}
        allowFullScreen
        className='ml-auto w-[80%] h-[16rem] m-[3rem]'
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default GoogleMap;