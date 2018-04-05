import React from 'react';
import pure from 'recompose/pure';
import SvgIcon from 'material-ui/SvgIcon';

const SvgIconCustom = typeof global !== "undefined" && global.__MUI_SvgIcon__ || SvgIcon;

let FiberManualRecord = props =>
  <SvgIconCustom {...props}>
    <circle cx="12" cy="12" r="8" />
  </SvgIconCustom>;

FiberManualRecord = pure(FiberManualRecord);
FiberManualRecord.muiName = 'SvgIcon';

export default FiberManualRecord;
