import {SortEnum, SortProps} from './Sort.props';
import SortIcon from './sort.svg';
import cn from 'classnames';
import s from './Sort.module.css';

export const Sort = ({ sort, setSort, className, ...props }: SortProps): JSX.Element => {
  return (
      <div className={cn(s.sort, className)} {...props}>
        <button
            onClick={() => setSort(SortEnum.Rating)}
            className={cn({
              [s.active]: sort == SortEnum.Rating
            })}
        >
          <SortIcon className={s.sortIcon} />По рейтингу
        </button>
        <button
            onClick={() => setSort(SortEnum.Price)}
            className={cn({
              [s.active]: sort == SortEnum.Price
            })}
        >
          <SortIcon className={s.sortIcon} />По цене
        </button>
      </div>
  );
};