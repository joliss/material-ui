import React from 'react';
import pure from 'recompose/pure';
import SvgIcon from 'material-ui/SvgIcon';

const SvgIconCustom = typeof global !== "undefined" && global.__MUI_SvgIcon__ || SvgIcon;

let Web = props =>
  <SvgIconCustom {...props}>
    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-5 14H4v-4h11v4zm0-5H4V9h11v4zm5 5h-4V9h4v9z" />
  </SvgIconCustom>;

Web = pure(Web);
Web.muiName = 'SvgIcon';

export default Web;
