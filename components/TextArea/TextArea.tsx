import { TextAreaProps } from './TextArea.props';
import cn from 'classnames';
import s from './TextArea.module.css';

export const TextArea = ({ className, ...props }: TextAreaProps): JSX.Element => {
  return (
    <textarea className={cn(className, s.textarea)} {...props} />
  );
};