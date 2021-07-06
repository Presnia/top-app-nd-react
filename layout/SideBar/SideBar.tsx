import { SideBarProps } from './SideBar.props';
import { Menu } from "../Menu/Menu";
import Logo from '../logo.svg';
import { Search } from "../../components";
import cn from 'classnames';
import s from './SideBar.module.css';

export const SideBar = ({ className, ...props }: SideBarProps): JSX.Element => {
  return (
    <aside className={cn(className, s.sidebar)} {...props}>
        <Logo className={s.logo}/>
        <Search />
        <Menu />
    </aside>
  );
};