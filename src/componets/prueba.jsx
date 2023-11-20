import React from 'react';
import ReactPlayer from 'react-player';

export const MediaComponent = ({ url, validateFunction }) => {
  return (
    
    <div>
      {<div>
      {validateFunction(url) ? (
        <ReactPlayer url={url} controls={true} loop={true} playing={true} width="510" height="550" />
      ) : (
        <img src={url} alt="Media" style={{ width: '510px', height: '550px' }} />
      )}
    </div>
    }
    </div>
  );
};

     