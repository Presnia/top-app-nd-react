import { ProductProps } from './Product.props';
import { Card } from "../Card/Card";
import { Rating } from "../Rating/Rating";
import { Tag } from "../Tag/Tag";
import cn from 'classnames';
import s from './Product.module.css';
import {Button} from "../Button/Button";

export const Product = ({ product, className, ...props }: ProductProps): JSX.Element => {
    return (
        <Card className={s.product}>
            <div className={s.logo}><img src={process.env.NEXT_PUBLIC_DOMAIN + product.image} alt={product.title}/></div>
            <div className={s.title}>{product.title}</div>
            <div className={s.price}>{product.price}</div>
            <div className={s.credit}>{product.credit}</div>
            <div className={s.rating}><Rating rating={product.reviewAvg ?? product.initialRating} /></div>
            <div className={s.tags}>{product.categories.map(c => <Tag key={c} color='ghost'>{c}</Tag>)}</div>
            <div className={s.priceTitle}>цена</div>
            <div className={s.creditTitle}>кредит</div>
            <div className={s.rateTitle}>{product.reviewCount} отзывов</div>
            <div className={s.hr}><hr/></div>
            <div className={s.description}>{product.description}</div>
            <div className={s.features}>features</div>
            <div className={s.advBlock}>
                <div>
                    <div className={s.advantages}>Преимущества</div>
                    <div>{product.advantages}</div>
                </div>
                <div>
                    <div className={s.disadvantages}>Недостатки</div>
                    <div>{product.disadvantages}</div>
                </div>
            </div>
            <div className={s.hr}><hr/></div>
            <div className={s.actions}>
                <Button appearance='primary'>Узнать подробнее</Button>
                <Button appearance='ghost' arrow={'right'}>Читать отзывы</Button>
            </div>
        </Card>
    );
};