import React from 'react';

import './AboutUs.css';
import { images } from '../../constants';

const AboutUs = () => (
  <div className='app__aboutus app__bg flex__center section__padding' id='about'>
    <div className='app__aboutus-overlay flex__center'>
        <img src={images.G} alt="G letter" />
    </div>
    <div className='app__aboutus-content flex__center'>
        <div className='app__aboutus-content_about'>
            <h1 className='headtext__cormorant'>AboutUs</h1>
            <img src={images.spoon} alt="about_spoon" className='spoon__img' />

            <p className='p__opensans'>At Gourmandise, we believe dining is more than just a meal—it’s an experience. Our passion for culinary excellence drives us to craft dishes that delight the senses. From our carefully curated menu to our warm, elegant ambiance, every detail is designed to create unforgettable moments for our guests. Join us and savor the art of fine dining.</p>
            <button type='button' className='custom__button'>Know More</button>
        </div>
        <div className='app__aboutus-content_knife flex__center'>
            <img src={images.knife} alt="about_knife" />
        </div>

        <div className='app__aboutus-content_history'>
            <h1 className='headtext__cormorant'>Our History</h1>
            <img src={images.spoon} alt="about_spoon" className='spoon__img' />

            <p className='p__opensans'>Founded with a passion for culinary excellence, Gourmandise began as a dream to bring fine dining to life. Over the years, we've combined timeless traditions with modern flavors to create a place where every meal feels special. Join us as we continue to celebrate the art of exceptional dining.</p>
            <button type='button' className='custom__button'>Know More</button>
        </div>
    </div>
  </div>
);

export default AboutUs;