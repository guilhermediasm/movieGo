import * as React from 'react';

import { Infomation, Title, Wrapper } from './styles';

type Props = {
  title: string;
  value: string | number | string[];
};

const CampMovieDetail: React.FC<Props> = ({ title, value, ...rest }) => (
  <Wrapper {...rest}>
    <Title>{title}</Title>
    <Infomation>{value}</Infomation>
  </Wrapper>
);

export default CampMovieDetail;
