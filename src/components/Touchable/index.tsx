import * as React from 'react';
import { TouchableOpacityProps } from 'react-native';

import { Wrapper } from './styles';

const Touchable: React.FC<TouchableOpacityProps> = ({ children, ...rest }) => (
  <Wrapper {...rest}>{children}</Wrapper>
);

export default Touchable;
