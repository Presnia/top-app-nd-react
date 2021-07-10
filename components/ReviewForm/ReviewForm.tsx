import { ReviewFormProps } from './ReviewForm.props';
import { Input } from "../Input/Input";
import { Rating } from "../Rating/Rating";
import { TextArea } from "../TextArea/TextArea";
import { Button } from "../Button/Button";
import CloseIcon from './close.svg';
import { useForm, Controller } from "react-hook-form";
import { IReviewForm } from "./ReviewForm.interface";
import cn from 'classnames';
import s from './ReviewForm.module.css';

export const ReviewForm = ({ productId, className, ...props }: ReviewFormProps): JSX.Element => {
    const { register, control, handleSubmit, formState: { errors } } = useForm<IReviewForm>();

    const onSubmit = (data: IReviewForm) =>
        console.log(data);
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className={cn(s.reviewForm, className)}
                 {...props}
            >
                <Input
                    {...register('name', {required: { value: true, message: 'Пожалуйста, введите своё имя!' }})}
                    placeholder='Имя'
                    error={errors.name}
                />
                <Input className={s.title}
                       {...register('title', {required: { value: true, message: 'Пожалуйста, введите имя заголовка!' }})}
                       placeholder='Заголовок отзыва'
                       error={errors.title}
                />
                <div className={s.rating}>
                    <span>Оценка: </span>
                    <Controller
                        control={control}
                        name='rating'
                        render={({ field }) => (
                        <Rating isEditable rating={field.value} ref={field.ref} setRating={field.onChange} />
                    )} />
                </div>
                <TextArea className={s.description}
                          {...register('description', {required: { value: true, message: 'Пожалуйста, введите' +
                                      ' описание!' }})}
                          placeholder='Текст отзыва'
                          error={errors.description}
                />
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
        </form>
    );
};