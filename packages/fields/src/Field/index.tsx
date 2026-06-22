import React, { type FC, type ReactNode } from 'react';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { Box } from '@xui/base';
import type { Nullable } from '@xui/types';

export interface FieldProps {
  label?: Nullable<string>;
  children?: ReactNode;
}

const Field: FC<FieldProps> = ({ label, children }) => (
  <FormControl fullWidth>
    {label ? <FormLabel>{label}</FormLabel> : null}
    <Box sx={{ mt: label ? 1 : 0 }}>{children}</Box>
  </FormControl>
);

export default Field;
