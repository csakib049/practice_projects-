import React, { useContext } from 'react';
import {subjectContext} from './ContextData';

const College = () => {

    
    const college :string = useContext(subjectContext);


  return (
    <div>
      <h1>this is a college components {college} </h1>
    </div>
  )
}

export default College
