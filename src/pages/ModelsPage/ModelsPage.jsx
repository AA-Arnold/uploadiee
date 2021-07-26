import React from 'react';
import './ModelsPage.scss';
import { Route } from 'react-router-dom';
import ModelFrame from '../../components/ModelFrame/ModelFrame';
import Uploads from '../../components/NavItems/Uploads/Uploads';
import Galary from '../../components/NavItems/Galary/Galary';
import Delete from '../../components/NavItems/Delete/Delete';

const ModelsPage = ({ match }) => {
  return (
    <div className='models-page'>
      <ModelFrame />
      <Route
        exact
        path={`${match.path}/uploads`}
        component={Uploads}
      />
      <Route exact path={`${match.path}/galary`} component={Galary} />
      <Route exact path={`${match.path}/delete`} component={Delete} />
    </div>
  );
};

export default ModelsPage;