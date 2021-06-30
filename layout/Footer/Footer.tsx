import { FooterProps } from './Footer.props';
import cn from 'classnames';
import { format } from 'date-fns';
import s from './Footer.module.css';

export const Footer = ({ className, ...props }: FooterProps): JSX.Element => {
  return (
    <footer className={cn(className, s.footer)} {...props}>
        <div>
            OwlTop © 2020 - {format(new Date(), 'yyyy')} Все права защищены
        </div>
        <a href="#" target="_blanc">Пользовательское соглашение</a>
        <a href="#" target="_blanc">Политика конфиденциальности</a>
    </footer>
  );
};