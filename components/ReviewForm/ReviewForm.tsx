import { ReviewFormProps } from './ReviewForm.props';
import { Input } from "../Input/Input";
import { Rating } from "../Rating/Rating";
import { TextArea } from "../TextArea/TextArea";
import { Button } from "../Button/Button";
import CloseIcon from './close.svg';
import cn from 'classnames';
import s from './ReviewForm.module.css';

export const ReviewForm = ({ productId, className, ...props }: ReviewFormProps): JSX.Element => {
    return (
        <>
            <div className={cn(s.reviewForm, className)}
                 {...props}
            >
                <Input placeholder='Имя' />
                <Input className={s.title} placeholder='Заголовок отзыва' />
                <div className={s.rating}>
                    <span>Оценка: </span>
                    <Rating rating={0} />
                </div>
                <TextArea className={s.description} placeholder='Текст отзыва' />
                <div className={s.submit}>
                    <Button appearance='primary'>Отправить</Button>
                    <span className={s.explanation}>* Перед публикацией отзыв пройдет предварительную модерацию и проверку</span>
                </div>
            </div>
            <div className={s.success}>
                <div className={s.successTitle}>Ваш отзыв отправлен</div>
                <div>Спасибо, ваш отзыв будет опубликован после проверки</div>
                <CloseIcon className={s.close}/>
            </div>
        </>
    );
};