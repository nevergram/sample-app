import React from 'react';

export interface HelloProps {
  name: string;
}

export const Hello: React.SFC<HelloProps> = ({ name }) => (
  <h1>Hello { name } !</h1>
);