import { CardProps } from './Card.props';
import cn from 'classnames';
import s from './Card.module.css';

export const Card = ({ color = 'white', children, className, ...props }: CardProps): JSX.Element => {
  return (
    <div className={cn(s.card, className, {
        [s.blue]: color == 'blue'
    })}
        {...props}
    >
        {children}
    </div>
  );
};