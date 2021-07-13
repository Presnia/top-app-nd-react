import {ButtonIconProps, icons} from './ButtonIcon.props';
import cn from 'classnames';
import styles from './ButtonIcon.module.css';

export const ButtonIcon = ({ appearance, icon, className, ...props }: ButtonIconProps): JSX.Element => {
    const IconComponent = icons[icon];

    return (
        <button className={cn(styles.button, className, {
          [styles.primary]: appearance == 'primary',
          [styles.white]: appearance == 'white',
        })}
        {...props}
        >
            <IconComponent />
        </button>
    );
};