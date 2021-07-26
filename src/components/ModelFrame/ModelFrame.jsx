import React from 'react';
import './ModelFrame.scss';
// import ImageDisplay from '../ImageDisplay/ImageDisplay';
import CustomImageButton from '../CustomImageButton/CustomImageButton';
// import WithSpinner from '../WithSpinner/WithSpinner';

// const ImageDisplayWithSpinner = WithSpinner(ImageDisplay);

const ModelFrame = ( ) => {
  return (
    <div className='model-frame'>
      <div className='image-container'>
        {/* <ImageDisplayWithSpinner isLoading={isImageLoading} /> */}
      </div>
      <div className='model-info-container'>
        <div className='info-skeleton'>
          <CustomImageButton />
        </div>
      </div>
    </div>
  );
};

export default ModelFrame;