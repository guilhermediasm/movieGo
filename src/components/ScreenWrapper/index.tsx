import React from 'react';

import { Wrapper } from './styles';

const ScreenWrapper: React.FC = ({ children, ...rest }) => (
  <Wrapper {...rest}>{children}</Wrapper>
);

export default ScreenWrapper;
