import React, { FC } from 'react';
import { Progress } from '~/modules';
import { Wrapper } from './styles';

type Props = {
  progress: number;
};

const Splash: FC<Props> = ({ progress }) => (
  <Wrapper>
    <Progress.Bar width={200} progress={progress} />
  </Wrapper>
);

export default Splash;
