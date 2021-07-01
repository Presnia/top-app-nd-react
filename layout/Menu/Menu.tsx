import cn from 'classnames';
import { format } from 'date-fns';
import s from './Menu.module.css';
import {useContext, useEffect} from "react";
import {AppContext} from "../../context/app.context";

export const Menu = (): JSX.Element => {
    const {menu, setMenu, firstCategory} = useContext(AppContext);

    useEffect(() => {
        setMenu && setMenu([]);
    });
  return (
    <div>
        <ul>
            {menu.map(el => (<li key={el._id.secondCategory}>{el._id.secondCategory}</li>))}
        </ul>
    </div>
  );
};