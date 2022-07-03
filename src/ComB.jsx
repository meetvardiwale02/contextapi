import React from 'react';
import ComC from './ComC'
import { FirstName } from './App';
import { useContext } from 'react';

const ComB = () =>{

  const fname = useContext(FirstName);

  return(

    <h1>
      My name is {fname}
    </h1>
    
  );
  
};

export default ComB;