import { useContext } from "react";
import { AppContext } from "../../context/app.context";
import {FirstLevelMenuItem, PageItem} from '../../interfaces/menu.interfaces';
import Link from 'next/link';
import CoursesIcon from './icons/courses.svg';
import ServicesIcon from './icons/services.svg';
import BooksIcon from './icons/books.svg';
import ProductsIcon from './icons/products.svg';
import {TopLevelCategory} from "../../interfaces/page.interface";
import cn from 'classnames';
import s from './Menu.module.css';

const firstLevelMenu: FirstLevelMenuItem[] = [
    { route: 'courses', name: 'Курсы', icon: <CoursesIcon />, id: TopLevelCategory.Courses},
    { route: 'services', name: 'Сервисы', icon: <ServicesIcon />, id: TopLevelCategory.Services},
    { route: 'books', name: 'Книги', icon: <BooksIcon />, id: TopLevelCategory.Books},
    { route: 'products', name: 'Продукты', icon: <ProductsIcon />, id: TopLevelCategory.Products}
];

export const Menu = (): JSX.Element => {
    const {menu, setMenu, firstCategory} = useContext(AppContext);

    const buildFirstLevel = () => {
        return (
            <>
                {firstLevelMenu.map(m => (
                    <div key={m.route}>
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
                    </div>
                ))}
            </>
        )
    };

    const buildSecondLevel = (menuItem: FirstLevelMenuItem) => {
        return (
            <div className={s.secondBlock}>
                {menu.map(m => (
                    <div key={m._id.secondCategory}>
                        <div className={s.secondLevel}>{m._id.secondCategory}</div>
                        <div className={cn(s.secondLevelBlock, {
                            [s.secondLevelBlockOpened]: m.isOpened
                        })}>
                            {buildThirdLevel(m.pages, menuItem.route)}
                        </div>
                    </div>
                ))}
            </div>
        );
    };

    const buildThirdLevel = (pages: PageItem[], route: string) => {
        return (
            pages.map(p => (
                <Link href={`/${route}/${p.alias}`}>
                    <a className={cn(s.thirdLevel, {
                        [s.thirdLevelActive]: false
                    })}>
                        {p.category}
                    </a>
                </Link>
            ))
        );
    };

  return (
    <div className={s.menu}>
        {buildFirstLevel()}
    </div>
  );
};