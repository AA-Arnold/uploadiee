import React from 'react';
import './CustomImageButton.scss';

const CustomImageButton = () => {


  return (
    <form name='form' className='custom-image-button'>
      <input
        type='file'
        name='image'
        id='images'
        accept='image/*'
        className='hidden'
        // onChange={}
      />
      <label className='image-input' htmlFor='images'>
        <i className='fa fa-file-image-o icon' aria-hidden='true' /> Try your
        own image
      </label>
    </form>
  );
};



export default CustomImageButton;