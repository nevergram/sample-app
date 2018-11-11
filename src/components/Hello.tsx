import React from 'react';

export interface IHelloProps {
  name: string;
}

export const Hello: React.SFC<IHelloProps> = ({name}) => (
  <h1>Hello {name} !</h1>
);