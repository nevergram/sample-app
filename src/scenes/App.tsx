import React from 'react';
import {Counter} from '../components/Counter';
import {Hello} from '../components/Hello';

export const App = () => (
  <>
    <Hello name={'World!'}/>
    <Counter/>

  </>
);