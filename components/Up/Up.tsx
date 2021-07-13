import { motion, useAnimation } from "framer-motion";
import {useScrollY} from "../../hooks/useScrollY";
import UpIcon from './up.svg';
import s from './Up.module.css';
import {useEffect} from "react";

export const Up = (): JSX.Element => {
    const controls = useAnimation();
    const y = useScrollY();

    useEffect(() => {
        controls.start({ opacity: y / document.body.scrollHeight });
    }, [y, controls]);

    const scrollTop = () => {
        window.scrollTo({
           top: 0,
           behavior: 'smooth'
        });
    };
    return (
          <motion.button
              className={s.up}
              animate={controls}
              initial={{opacity: 0}}
              onClick={scrollTop}
          >
              <UpIcon />
          </motion.button>
    );
};