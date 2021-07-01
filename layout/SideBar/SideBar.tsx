import { SideBarProps } from './SideBar.props';
import cn from 'classnames';
import styles from './SideBar.module.css';
import { Menu } from "../Menu/Menu";

export const SideBar = ({ ...props }: SideBarProps): JSX.Element => {
  return (
    <aside {...props}>
      <Menu />
    </aside>
  );
};