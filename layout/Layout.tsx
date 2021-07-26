import { LayoutProps } from './Layout.props';
import { Header } from './Header/Header';
import { SideBar } from "./SideBar/SideBar";
import { Footer } from "./Footer/Footer";
import { FunctionComponent, useState, KeyboardEvent, useRef } from "react";
import { AppContextProvider, IAppContext } from "../context/app.context";
import { Up } from "../components";
import cn from 'classnames';
import s from './Layout.module.css';


const Layout = ({ children }: LayoutProps): JSX.Element => {
    const [isSkipLinkDisplayed, setIsSkipLinkDisplayed] = useState<boolean>(false);
    const bodyRef = useRef<HTMLDivElement>(null);

    const scipContentAction = (key: KeyboardEvent, ) => {
        if (key.code === 'Space' || key.code === 'Enter') {
            key.preventDefault();
            bodyRef.current?.focus();
        }
        setIsSkipLinkDisplayed(false);
    };

    return (
        <div className={s.wrapper}>
            <a
                onFocus={() => setIsSkipLinkDisplayed(true)}
                tabIndex={1}
                className={cn(s.skipLink , {
                [s.displayed]: isSkipLinkDisplayed
                })}
                onKeyDown={scipContentAction}
            >Сразу к содержанию</a>
            <Header className={s.header} />
            <SideBar className={s.sidebar} />
            <div className={s.body} ref={bodyRef} tabIndex={0}>
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