import React, { forwardRef } from 'react';

const Input = (props, ref) => {
  return <input type='text' ref={ref} />;
};

export default forwardRef(Input);
