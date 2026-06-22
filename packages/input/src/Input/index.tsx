import React, { type FC } from 'react';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import MuiInput, { type InputProps as MuiInputProps } from '@mui/material/Input';
import type { Nullable } from '@xui/types';

export interface InputProps extends MuiInputProps {
  label?: Nullable<string>;
}

const Input: FC<InputProps> = ({ label, ...props }) => (
  <FormControl fullWidth>
    {label ? <FormLabel>{label}</FormLabel> : null}
    <MuiInput fullWidth {...props} />
  </FormControl>
);

export default Input;
