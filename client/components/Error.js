import React, {useState, useEffect} from 'react';
import { Redirect, useLocation } from 'react-router-dom';

function Error() {

  return (
    <div>
      <iframe
        src="https://www.youtube.com/watch?v=aswgTPlzazo&ab_channel=HigherQualityUploads"
        frameborder="0"
        allow="autoplay; encrypted-media"
        allowfullscreen
        title="video"
      />{" "}
    </div>
  );
}

export default Error;
