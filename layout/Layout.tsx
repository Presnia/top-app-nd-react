import { LayoutProps } from './Layout.props';
import { Header } from './Header/Header';
import { SideBar } from "./SideBar/SideBar";
import { Footer } from "./Footer/Footer";
import cn from 'classnames';
import s from './Layout.module.css';
import {FunctionComponent} from "react";

const Layout = ({ children }: LayoutProps): JSX.Element => {
  return (
    <div className={s.wrapper}>
      <Header className={s.header} />
      <SideBar className={s.sidebar} />
      <div className={s.body}>
          {children}
      </div>
      <Footer className={s.footer} />
    </div>
  );
};

export const withLayout = <T extends Record<string, unknown>>(Component: FunctionComponent<T>) => {
  return function withLayoutComponent(props: T): JSX.Element {
    return  (
        <Layout>
          <Component {...props} />
        </Layout>
    );
  };
};