import { Button } from 'antd/lib/radio';
import React from 'react';

interface Props {
  children: React.ReactNode;
}

const N11Button = ({ children, ...props }: Props) => {
  return <Button {...props}>{children}</Button>;
};

export default N11Button;
