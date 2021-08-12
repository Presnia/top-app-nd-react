import { ReviewFormProps } from './ReviewForm.props';
import { Input } from "../Input/Input";
import { Rating } from "../Rating/Rating";
import { TextArea } from "../TextArea/TextArea";
import { Button } from "../Button/Button";
import CloseIcon from './close.svg';
import { useForm, Controller } from "react-hook-form";
import { IReviewForm, IReviewSentResponse } from "./ReviewForm.interface";
import { API } from "../../helpers/api";
import { useState } from "react";
import cn from 'classnames';
import s from './ReviewForm.module.css';
import axios from "axios";

export const ReviewForm = ({ productId, isOpened, className, ...props }: ReviewFormProps): JSX.Element => {
    const { register, control, handleSubmit, formState: { errors }, reset } = useForm<IReviewForm>();
    const [isSuccess, setIsSuccess] = useState<boolean>(false);
    const [isError, setIsError] = useState<string>();

    const onSubmit = async (formData: IReviewForm) => {
        try {
            const { data } = await axios.post<IReviewSentResponse>(API.review.createDemo, { ...formData, productId});
            if (data.message) {
                setIsSuccess(true);
                reset();
            } else {
                setIsError('Что-то пошло не так...');
            }
        } catch (e) {
            setIsError(e.message);
        }
    };
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className={cn(s.reviewForm, className)}
                 {...props}
            >
                <Input
                    {...register('name', {required: { value: true, message: 'Пожалуйста, введите своё имя!' }})}
                    placeholder='Имя'
                    error={errors.name}
                    tabIndex={isOpened ? 0 : -1}
                />
                <Input className={s.title}
                       {...register('title', {required: { value: true, message: 'Пожалуйста, введите имя заголовка!' }})}
                       placeholder='Заголовок отзыва'
                       error={errors.title}
                       tabIndex={isOpened ? 0 : -1}
                />
                <div className={s.rating}>
                    <span>Оценка: </span>
                    <Controller
                        control={control}
                        name='rating'
                        rules={{required: { value: true, message: 'Укажите рейтинг'}}}
                        render={({ field }) => (
                        <Rating
                            isEditable
                            rating={field.value}
                            ref={field.ref}
                            setRating={field.onChange}
                            error={errors.rating}
                            tabIndex={isOpened ? 0 : -1}
                        />
                    )} />
                </div>
                <TextArea className={s.description}
                          {...register('description', {required: { value: true, message: 'Пожалуйста, введите' +
                                      ' описание!' }})}
                          placeholder='Текст отзыва'
                          error={errors.description}
                          tabIndex={isOpened ? 0 : -1}
                />
                <div className={s.submit}>
                    <Button appearance='primary' tabIndex={isOpened ? 0 : -1}>Отправить</Button>
                    <span className={s.explanation}>* Перед публикацией отзыв пройдет предварительную модерацию и проверку</span>
                </div>
            </div>
            {isSuccess &&
            <div className={cn(s.success, s.panel)}>
                <div className={s.successTitle}>Ваш отзыв отправлен</div>
                <div>Спасибо, ваш отзыв будет опубликован после проверки</div>
                <CloseIcon className={s.close} onClick={() => setIsSuccess(false)} />
            </div>}
            {isError &&
            <div className={cn(s.error, s.panel)}>
              Что-то пошло не так, пожалуйста, обновите страницу!
                <CloseIcon className={s.close} onClick={() => setIsError(undefined)} />
            </div>}
        </form>
    );
};