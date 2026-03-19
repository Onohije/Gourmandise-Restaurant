import React from 'react';

import { meal } from '../../constants';
import './Intro.css';

const Intro = () => {
  return (
    <div className="app__video">
      <video
        src={meal}
        type="video/mp4"
        loop
        controls={false}
        muted
        autoPlay
      />
    </div>
  );
};

export default Intro;