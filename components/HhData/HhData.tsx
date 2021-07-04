import    { HhDataProps } from './HhData.props';
import RateIcon from './rate.svg';
import { Card } from "../Card/Card";
import { priceRu } from "../../helpers/helpers";
import s from './HhData.module.css';

export const HhData = ({ count, juniorSalary, middleSalary, seniorSalary }: HhDataProps): JSX.Element => {
  return (
      <div className={s.hh}>
        <Card className={s.count}>
          <div className={s.title}>Всего вакансий</div>
          <div className={s.countValue}>{count}</div>
        </Card>
        <Card className={s.salary}>
          <div>
              <div className={s.title}>Начальный</div>
              <div className={s.salaryValue}>{priceRu(juniorSalary)}</div>
              <div className={s.rate}>
                  <RateIcon className={s.filled}/>
                  <RateIcon />
                  <RateIcon />
              </div>
          </div>
            <div>
                <div className={s.title}>Средний</div>
                <div className={s.salaryValue}>{priceRu(middleSalary)}</div>
                <div className={s.rate}>
                    <RateIcon className={s.filled}/>
                    <RateIcon className={s.filled}/>
                    <RateIcon />
                </div>
            </div>
            <div>
                <div className={s.title}>Профессионал</div>
                <div className={s.salaryValue}>{priceRu(seniorSalary)}</div>
                <div className={s.rate}>
                    <RateIcon className={s.filled}/>
                    <RateIcon className={s.filled}/>
                    <RateIcon className={s.filled}/>
                </div>
            </div>
        </Card>
      </div>
  );
};