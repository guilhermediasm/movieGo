import * as React from 'react';
import { TouchableOpacityProps } from 'react-native';

import { Text, Wrapper } from './styles';

type Props = TouchableOpacityProps;

const Button: React.FC<Props> = ({ children, ...rest }) => (
  <Wrapper {...rest}>
    <Text>{children}</Text>
  </Wrapper>
);

export default Button;
