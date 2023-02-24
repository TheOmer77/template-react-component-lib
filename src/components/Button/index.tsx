import React from 'react';

import './index.css';

interface ButtonProps {
  label: string;
}

const Button = ({ label }: ButtonProps) => {
  return <button className='button-wow'>{label}</button>;
};

export default Button;
