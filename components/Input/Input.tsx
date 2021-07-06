import { InputProps } from './Input.props';
import cn from 'classnames';
import s from './Input.module.css';

export const Input = ({ className, ...props }: InputProps): JSX.Element => {
  return (
    <input className={cn(className, s.input)} {...props} />
  );
};