import { TextAreaProps } from './TextArea.props';
import {ForwardedRef, forwardRef} from "react";
import cn from 'classnames';
import s from './TextArea.module.css';

export const TextArea = forwardRef(({ error, className, ...props }: TextAreaProps, ref: ForwardedRef<HTMLTextAreaElement>): JSX.Element => {
    return (
        <div className={cn(s.textAreaWrapper, className)}>
            <textarea className={cn(s.textarea, {
                [s.error]: error

            })} ref={ref} {...props} />
            {error && <span className={s.errorMessage}>{error.message}</span>}
        </div>
    );
});