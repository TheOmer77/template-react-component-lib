import classNames from 'classnames';
import type { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

import './index.css';

const Button = ({
  className,
  ...props
}: DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>) => {
  return <button className={classNames('button-wow', className)} {...props} />;
};

export default Button;
