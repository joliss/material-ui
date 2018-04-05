import React from 'react';
import pure from 'recompose/pure';
import SvgIcon from 'material-ui/SvgIcon';

const SvgIconCustom = typeof global !== 'undefined' && global.__MUI_SvgIcon__ || SvgIcon;

let FormatLineSpacing = props =>
  <SvgIconCustom {...props}>
    <path d="M6 7h2.5L5 3.5 1.5 7H4v10H1.5L5 20.5 8.5 17H6V7zm4-2v2h12V5H10zm0 14h12v-2H10v2zm0-6h12v-2H10v2z" />
  </SvgIconCustom>;

FormatLineSpacing = pure(FormatLineSpacing);
FormatLineSpacing.muiName = 'SvgIcon';

export default FormatLineSpacing;
