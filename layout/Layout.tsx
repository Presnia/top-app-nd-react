import { LayoutProps } from './Layout.props';
import { Header } from './Header/Header';
import { SideBar } from "./SideBar/SideBar";
import { Footer } from "./Footer/Footer";
import cn from 'classnames';
import styles from './Layout.module.css';
import {FunctionComponent} from "react";

const Layout = ({ children }: LayoutProps): JSX.Element => {
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

export const withLayout = <T extends Record<string, unknown>>(Component: FunctionComponent) => {
  return function withLayoutComponent(props: T): JSX.Element {
    return  (
        <Layout>
          <Component {...props} />
        </Layout>
    );
  };
};