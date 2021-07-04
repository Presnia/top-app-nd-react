import    { HhDataProps } from './HhData.props';
import RateIcon from './rate.svg';
import s from './HhData.module.css';
import { Card } from "../Card/Card";

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
              <div className={s.salaryValue}>{juniorSalary}</div>
              <div className={s.rate}>
                  <RateIcon className={s.filled}/>
                  <RateIcon />
                  <RateIcon />
              </div>
          </div>
            <div>
                <div className={s.title}>Средний</div>
                <div className={s.salaryValue}>{middleSalary}</div>
                <div className={s.rate}>
                    <RateIcon className={s.filled}/>
                    <RateIcon className={s.filled}/>
                    <RateIcon />
                </div>
            </div>
            <div>
                <div className={s.title}>Профессионал</div>
                <div className={s.salaryValue}>{seniorSalary}</div>
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