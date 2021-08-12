import  { RatingProps } from './Rating.props';
import {useEffect, useState, KeyboardEvent, forwardRef, ForwardedRef, useRef} from "react";
import StarIcon from './star.svg';
import cn from 'classnames';
import s from './Rating.module.css';


export const Rating = forwardRef(({ isEditable = false, rating, error, setRating, children, ...props }: RatingProps, ref: ForwardedRef<HTMLDivElement>): JSX.Element => {
    const [ratingArray, setRatingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>));
    const ratingArrayRef = useRef<(HTMLSpanElement | null)[]>([]);

    useEffect(() => {
        constructRating(rating);
    }, [rating]);

    const computeFocus = (r: number, i: number): number => {
        if (!isEditable) {
            return -1;
        }
        if (!rating && i == 0) {
            return 0;
        }
        if (r == i + 1) {
            return 0;
        }
        return -1;
    };

    const constructRating = (currentRating: number) => {
        const updatedArray = ratingArray.map((r: JSX.Element, i:number) => {
          return (
              <span
                  className={cn(s.star, {
                      [s.filled]: i < currentRating,
                      [s.editable]: isEditable
                  })}
                  onMouseEnter={() => changeDisplay(i + 1)}
                  onMouseLeave={() => changeDisplay(rating)}
                  onClick={() => onClick(i + 1)}
                  tabIndex={computeFocus(rating, i)}
                  onKeyDown={handleKey}
                  ref={r => ratingArrayRef.current?.push(r)}
              >
                  <StarIcon />
              </span>
          );
        });
        setRatingArray(updatedArray);
    };

    const changeDisplay = (i: number) => {
        if (!isEditable) {
            return;
        }
        constructRating(i);
    };

    const onClick = (i: number) => {
        if (!isEditable || !setRating) {
            return;
        }
        setRating(i);
    };

    const handleKey = (e: KeyboardEvent) => {
        if (!isEditable || !setRating) {
            return;
        }
        if (e.code == 'ArrowRight' || e.code == 'ArrowUp') {
            if (!rating) {
                setRating(1);
            } else {
                e.preventDefault();
                setRating(rating < 5 ? rating + 1 : 5);
            }
            ratingArrayRef.current[rating]?.focus();
        }
        if (e.code == 'ArrowLeft' || e.code == 'ArrowDown') {
            e.preventDefault();
            setRating(rating > 1 ? rating - 1 : 0);
            ratingArrayRef.current[rating - 2]?.focus();
        }
    };

  return (
    <div className={cn(s.ratingWrapper, {
        [s.error]: error
    })} {...props} ref={ref}>
        {ratingArray.map((r, i) => (<span key={i}>{r}</span>))}
        {error && <span className={s.errorMessage}>{error.message}</span>}
    </div>
  );
});