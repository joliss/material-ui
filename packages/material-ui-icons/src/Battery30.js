import React from 'react';
import pure from 'recompose/pure';
import SvgIcon from 'material-ui/SvgIcon';

const SvgIconCustom = typeof global !== 'undefined' && global.__MUI_SvgIcon__ || SvgIcon;

let Battery30 = props =>
  <SvgIconCustom {...props}>
    <path fillOpacity=".3" d="M17 5.33C17 4.6 16.4 4 15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33V15h10V5.33z" /><path d="M7 15v5.67C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V15H7z" />
  </SvgIconCustom>;

Battery30 = pure(Battery30);
Battery30.muiName = 'SvgIcon';

export default Battery30;
