import { TopPageComponentProps } from "./TopPageComponent.props";
import cn from "classnames";
import styles from "../../components/P/P.module.css";
import s from './TopPageComponent.module.css';


export const TopPageComponent = ({ page, products, firstCategory }: TopPageComponentProps): JSX.Element => {
    return (
        <>
            {products && products.length}
        </>
    );
};