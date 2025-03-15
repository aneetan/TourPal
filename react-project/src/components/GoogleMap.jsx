import React from 'react';

const GoogleMap = ({ src, width, height, title }) => {
  return (
    <div>
      <iframe
        title={title}
        src={src}
        width={width}
        height={height}
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default GoogleMap;