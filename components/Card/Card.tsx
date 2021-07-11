import { CardProps } from './Card.props';
import { ForwardedRef, forwardRef } from "react";
import cn from 'classnames';
import s from './Card.module.css';

export const Card = forwardRef(({ color = 'white', children, className, ...props }: CardProps, ref: ForwardedRef<HTMLDivElement>): JSX.Element => {
  return (
    <div className={cn(s.card, className, {
        [s.blue]: color == 'blue'
    })}
         ref={ref}
        {...props}
    >
        {children}
    </div>
  );
});