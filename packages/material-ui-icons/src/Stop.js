import React from 'react';
import pure from 'recompose/pure';
import SvgIcon from 'material-ui/SvgIcon';

const SvgIconCustom = typeof global !== 'undefined' && global.__MUI_SvgIcon__ || SvgIcon;

let Stop = props =>
  <SvgIconCustom {...props}>
    <path d="M6 6h12v12H6z" />
  </SvgIconCustom>;

Stop = pure(Stop);
Stop.muiName = 'SvgIcon';

export default Stop;
