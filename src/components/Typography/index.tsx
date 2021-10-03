import * as React from 'react';
import { Text } from './styles';

const Typography: React.FC = ({ children, ...rest }) => (
  <Text {...rest}>{children}</Text>
);

export default Typography;
