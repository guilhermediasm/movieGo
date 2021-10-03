import React, { FC } from 'react';
import Svg, { Path } from 'react-native-svg';

const IconShop: FC<SvgProps> = ({ width = 28, height = 28 }) => (
  <Svg width={width} height={height} viewBox="0 0 28 28" fill="none">
    <Path
      d="M22.75 13.563v8.166a2.34 2.34 0 01-2.333 2.334H7.583a2.34 2.34 0 01-2.333-2.334v-5.833"
      stroke="#419BEC"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M23.346 5.396a2.155 2.155 0 00-1.753-1.458H6.407a2.156 2.156 0 00-1.753 1.458c-.43 1.29-1.737 3.613-1.737 5.25a3.21 3.21 0 005.826 1.55 3.208 3.208 0 002.628 1.367A3.294 3.294 0 0014 12.102a3.294 3.294 0 002.628 1.46 3.208 3.208 0 002.629-1.368 3.21 3.21 0 005.826-1.55c0-1.636-1.307-3.96-1.737-5.25zM16.333 24.063v-4.667a2.333 2.333 0 10-4.666 0v4.666"
      stroke="#419BEC"
      strokeWidth={2}
      strokeMiterlimit={10}
    />
  </Svg>
);

export default IconShop;
