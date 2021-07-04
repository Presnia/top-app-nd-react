import { SideBarProps } from './SideBar.props';
import { Menu } from "../Menu/Menu";
import Logo from '../logo.svg';
import cn from 'classnames';
import s from './SideBar.module.css';

export const SideBar = ({ className, ...props }: SideBarProps): JSX.Element => {
  return (
    <aside className={cn(className, s.sidebar)} {...props}>
        <Logo className={s.logo}/>
        <div>search</div>
        <Menu />
    </aside>
  );
};