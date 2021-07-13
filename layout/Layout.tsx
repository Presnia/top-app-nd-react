import { LayoutProps } from './Layout.props';
import { Header } from './Header/Header';
import { SideBar } from "./SideBar/SideBar";
import { Footer } from "./Footer/Footer";
import { FunctionComponent } from "react";
import { AppContextProvider, IAppContext } from "../context/app.context";
import { Up } from "../components";
import cn from 'classnames';
import s from './Layout.module.css';


const Layout = ({ children }: LayoutProps): JSX.Element => {
  return (
    <div className={s.wrapper}>
      <Header className={s.header} />
      <SideBar className={s.sidebar} />
      <div className={s.body}>
          {children}
      </div>
      <Footer className={s.footer} />
        <Up />
    </div>
  );
};

export const withLayout = <T extends Record<string, unknown> & IAppContext>(Component: FunctionComponent<T>) => {
  return function withLayoutComponent(props: T): JSX.Element {
    return  (
        <AppContextProvider menu={props.menu} firstCategory={props.firstCategory}>
            <Layout>
                <Component {...props} />
            </Layout>
        </AppContextProvider>
    );
  };
};