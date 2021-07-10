import { InputProps } from './Input.props';
import cn from 'classnames';
import s from './Input.module.css';
import {ForwardedRef, forwardRef} from "react";

export const Input = forwardRef(({ className, error, ...props }: InputProps, ref: ForwardedRef<HTMLInputElement>): JSX.Element => {
    return (
        <div className={cn(s.inputWrapper, className)}>
            <input className={cn(s.input, {
                [s.error]: error
            })} ref={ref} {...props} />
            {error && <span className={s.errorMessage}>{error.message}</span>}
        </div>
    );
});