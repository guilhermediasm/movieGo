import React, { FC } from 'react';
import Svg, { Path } from 'react-native-svg';

type SvgProps = {
  color?: string;
  width?: number;
  height?: number;
};

const IconLeft: FC<SvgProps> = ({
  color = '#98A4B7',
  width = 12,
  height = 22,
}) => (
  <Svg width={width} height={height} viewBox="0 0 12 22" fill="none">
    <Path
      d="M10.8418 21.214L11.7699 20.2859C11.9896 20.0662 11.9896 19.7101 11.7699 19.4904L3.29966 11L11.7699 2.50949C11.9896 2.28983 11.9896 1.93368 11.7699 1.71398L10.8418 0.785897C10.6222 0.566241 10.266 0.566241 10.0463 0.785897L0.23005 10.6022C0.0103936 10.8219 0.0103936 11.178 0.23005 11.3977L10.0463 21.214C10.266 21.4337 10.6222 21.4337 10.8418 21.214Z"
      fill={color}
    />
  </Svg>
);

export default IconLeft;
