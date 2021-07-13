import { ProductProps } from './Product.props';
import { Card } from "../Card/Card";
import { Rating } from "../Rating/Rating";
import { Tag } from "../Tag/Tag";
import { Button } from "../Button/Button";
import { declOfNumber, priceRu } from "../../helpers/helpers";
import { Divider } from "../Divider/Divider";
import Image from'next/image';
import {ForwardedRef, forwardRef, useRef, useState} from "react";
import { Review } from "../Review/Review";
import { ReviewForm } from "../ReviewForm/ReviewForm";
import { motion } from 'framer-motion';
import cn from 'classnames';
import s from './Product.module.css';


export const Product = motion(forwardRef(({ product, className, ...props }: ProductProps, ref: ForwardedRef<HTMLDivElement>): JSX.Element => {
    const [isReviewOpened, setIsReviewOpened] = useState(false);
    const reviewRef = useRef<HTMLDivElement>(null);

    const scrollToReview = () => {
        setIsReviewOpened(true);
        reviewRef.current?.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    };

    return (
        <div className={className} {...props} ref={ref}>
            <Card className={s.product}>
                <div className={s.logo}>
                    <Image
                        src={process.env.NEXT_PUBLIC_DOMAIN + product.image}
                        alt={product.title}
                        width={70}
                        height={70}
                    />
                </div>
                <div className={s.title}>{product.title}</div>
                <div className={s.price}>
                    {priceRu(product.price)}
                    {product.oldPrice &&
                    <Tag className={s.sale}
                         color='green'>{priceRu(product.price - product.oldPrice)}
                    </Tag>}
                </div>
                <div className={s.credit}>
                    {priceRu(product.credit)}
                    <span className={s.month}>/мес</span>
                </div>
                <div className={s.rating}><Rating rating={product.reviewAvg ?? product.initialRating} /></div>
                <div className={s.tags}>{product.categories.map(c =>
                    <Tag className={s.category} key={c}
                         color='ghost'>
                        {c}
                    </Tag>
                )}
                </div>
                <div className={s.priceTitle}>цена</div>
                <div className={s.creditTitle}>кредит</div>
                <div className={s.rateTitle}>
                    <a href="#ref" onClick={scrollToReview}>
                        {product.reviewCount} {declOfNumber(product.reviewCount, ['отзыв', 'отзыва', 'отзывов'])}
                    </a>
                </div>
                <Divider className={s.hr} />
                <div className={s.description}>{product.description}</div>
                <div className={s.features}>
                    {product.characteristics.map(c => (
                        <div key={c.name} className={s.characteristics}>
                            <span className={s.characteristicsName}>{c.name}</span>
                            <span className={s.characteristicsDots}></span>
                            <span className={s.characteristicsValue}>{c.value}</span>
                        </div>
                    ))}
                </div>
                <div className={s.advBlock}>
                    {product.advantages &&
                    <div className={s.advantages}>
                      <div className={s.advTitle}>Преимущества</div>
                      <div>{product.advantages}</div>
                    </div>}
                    {product.disadvantages &&
                    <div className={s.disadvantages}>
                      <div className={s.advTitle}>Недостатки</div>
                      <div>{product.disadvantages}</div>
                    </div>}
                </div>
                <Divider className={cn(s.hr, s.hr2)} />
                <div className={s.actions}>
                    <Button appearance='primary'>Узнать подробнее</Button>
                    <Button appearance='ghost'
                            className={s.reviewBtn}
                            arrow={isReviewOpened ? 'down' : 'right'}
                            onClick={() => setIsReviewOpened(!isReviewOpened)}
                    >Читать отзывы
                    </Button>
                </div>
            </Card>
            <Card color='blue' className={cn(s.reviews, {
                [s.opened]: isReviewOpened,
                [s.closed]: !isReviewOpened,
            })} ref={reviewRef}
            >
                {product.reviews && product.reviews.map(r => (
                    <div key={r._id} >
                        <Review review={r} />
                        <Divider />
                    </div>
                ))}
                <ReviewForm productId={product._id} />
            </Card>
        </div>
    );
}));