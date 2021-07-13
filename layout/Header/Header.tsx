import { HeaderProps } from './Header.props';
import { useRouter } from "next/router";
import Logo from '../logo.svg';
import { ButtonIcon } from "../../components/ButtonIcon/ButtonIcon";
import { SideBar } from "../SideBar/SideBar";
import { useEffect, useState } from "react";
import { motion } from 'framer-motion';
import cn from 'classnames';
import s from './Header.module.css';


export const Header = ({ className, ...props }: HeaderProps): JSX.Element => {
    const [isOpened, setIsOpened] = useState<boolean>(false);
    const router = useRouter();

    useEffect(() => {
        setIsOpened(false);
    },[router]);

    const variants = {
        opened: {
            opacity: 1,
            x: 0,
            transition: {
                stiffness: 20
            }
        },
        closed: {
            opacity: 0,
            x: '100%'
        }
    };

      return (
          <header className={cn(className, s.header)} {...props}>
              <Logo />
              <ButtonIcon appearance='white' icon='menu' onClick={() => setIsOpened(true)}/>
              <motion.div
                  className={s.mobileMenu}
                  variants={variants}
                  initial={'closed'}
                  animate={isOpened ? 'opened' : 'closed'}
              >
                  <SideBar />
                  <ButtonIcon
                      className={s.menuClose}
                      onClick={() => setIsOpened(false)}
                      appearance='white'
                      icon='close' />
              </motion.div>
          </header>
      );
};