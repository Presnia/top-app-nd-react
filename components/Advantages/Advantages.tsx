import    { AdvantagesProps } from './Advantages.props';
import CheckIcon from './check.svg';
import { Card } from "../Card/Card";
import { priceRu } from "../../helpers/helpers";
import s from './Advantages.module.css';

export const Advantages = ({ advantages }: AdvantagesProps): JSX.Element => {
  return (
      <>
          {advantages.map(a => (
              <div key={a._id} className={s.advantage}>
                  <CheckIcon />
                  <div className={s.title}>{a.title}</div>
                  <hr className={s.vline}/>
                  <div>{a.description}</div>
              </div>
          ))}
      </>
  );
};