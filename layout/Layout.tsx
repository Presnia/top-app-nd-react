import { LayoutProps } from './Layout.props';
import { Header } from './Header/Header';
import { SideBar } from "./SideBar/SideBar";
import { Footer } from "./Footer/Footer";
import cn from 'classnames';
import styles from './Layout.module.css';

export const Layout = ({ children }: LayoutProps): JSX.Element => {
  return (
    <>
      <Header />
      <div>
        <SideBar />
        <div>
          {children}
        </div>
      </div>
      <Footer />
    </>
  );
};