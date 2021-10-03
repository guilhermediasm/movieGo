import React from 'react';

import { Wrapper } from './styles';

const ScreenWrapper: React.FC = ({ children, ...rest }) => {
  return <Wrapper {...rest}>{children}</Wrapper>;
};

export default ScreenWrapper;
