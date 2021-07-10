import { ReviewProps } from './Review.props';
import UserIcon from './user.svg';
import { Rating } from "../Rating/Rating";
import { format } from "date-fns";
import { ru } from "date-fns/locale";
import cn from 'classnames';
import s from './Review.module.css';

export const Review = ({ review, className, ...props }: ReviewProps): JSX.Element => {
    const { _id ,name, title, description, createdAt, rating } = review;
    return (
        <div className={cn(s.review, className)}
             {...props}
        >
            <UserIcon className={s.user}/>
            <div className={s.title}>
                <span className={s.name}>{name}:</span>&nbsp;&nbsp;
                <span>{title}</span>
            </div>
            <div className={s.date}>
                {format(new Date(createdAt), 'dd MMMM yyyy', {locale: ru})}
            </div>
            <div className={s.rating}>
                <Rating rating={rating} />
            </div><div className={s.description}>
                {description}
            </div>
        </div>
    );
};