import { useContext, KeyboardEvent } from "react";
import { AppContext } from "../../context/app.context";
import { FirstLevelMenuItem, PageItem } from '../../interfaces/menu.interfaces';
import Link from 'next/link';
import { useRouter } from "next/router";
import { firstLevelMenu } from '../../helpers/helpers';
import { motion } from 'framer-motion';
import cn from 'classnames';
import s from './Menu.module.css';

export const Menu = (): JSX.Element => {
    const {menu, setMenu, firstCategory} = useContext(AppContext);
    const router = useRouter();

    const openSecondLevel = (secondCategory: string) => {
        setMenu && setMenu(menu.map(m => {
            if (m._id.secondCategory == secondCategory) {
                m.isOpened = !m.isOpened;
            }
            return m;
        }));
    };

    const openSecondLevelKey = (key: KeyboardEvent, secondCategory: string) => {
        if (key.code === 'Space' || key.code === 'Enter') {
            key.preventDefault();
            openSecondLevel(secondCategory);
        }
    };

    const variants = {
        visible: {
            marginBottom: 20,
            transition: {
                when: 'beforeChildren',
                staggerChildren: 0.1
            }
        },
        hidden: {
            marginBottom: 0,
        }
    };

    const variantsChildren = {
        visible: {
            opacity: 1,
            height: 29
        },
        hidden: {
            opacity: 0,
            height: 0
        }
    };

    const buildFirstLevel = () => {
        return (
            <ul className={s.firstLevelList}>
                {firstLevelMenu.map(m => (
                    <li key={m.route}>
                        <Link href={`/${m.route}`}>
                            <a>
                                <div className={cn(s.firstLevel, {
                                    [s.firstLevelActive]: m.id == firstCategory
                                })}>
                                    {m.icon}
                                    <span>{m.name}</span>
                                </div>
                            </a>
                        </Link>
                        {m.id == firstCategory && buildSecondLevel(m)}
                    </li>
                ))}
            </ul>
        );
    };

    const buildSecondLevel = (menuItem: FirstLevelMenuItem) => {
        return (
            <div className={s.secondBlock}>
                {menu.map(m => {
                    if (m.pages.map(p => p.alias).includes(router.asPath.split('/')[2])) {
                        m.isOpened = true;
                    }
                    return (
                        <div key={m._id.secondCategory}>
                            <div
                                tabIndex={0}
                                onKeyDown={(key: KeyboardEvent) => openSecondLevelKey(key, m._id.secondCategory)}
                                className={s.secondLevel} onClick={
                                () => openSecondLevel(m._id.secondCategory)}
                            >
                                {m._id.secondCategory}
                            </div>
                            <motion.div
                                layout
                                initial={m.isOpened ? 'visible' : 'hidden'}
                                animate={m.isOpened ? 'visible' : 'hidden'}
                                variants={variants}
                                className={cn(s.secondLevelBlock)}
                            >
                                {buildThirdLevel(m.pages, menuItem.route, m.isOpened ?? false)}
                            </motion.div>
                        </div>
                    );
                })}
            </div>
        );
    };

    const buildThirdLevel = (pages: PageItem[], route: string, isOpened: boolean) => {
        return (
            pages.map(p => (
                <motion.div key={p._id} variants={variantsChildren}>
                    <Link href={`/${route}/${p.alias}`}>
                        <a tabIndex={isOpened ? 0 : -1} className={cn(s.thirdLevel, {
                            [s.thirdLevelActive]: `/${route}/${p.alias}` == router.asPath
                        })}>
                            {p.category}
                        </a>
                    </Link>
                </motion.div>
            ))
        );
    };

  return (
    <div className={s.menu}>
        {buildFirstLevel()}
    </div>
  );
};