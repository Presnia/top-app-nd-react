import { SearchProps } from './Search.props';
import { useRouter } from "next/router";
import { Input } from "../Input/Input";
import { Button } from "../Button/Button";
import { useState } from "react";
import SearchIcon from './search.svg';
import cn from 'classnames';
import s from './Search.module.css';



export const Search = ({ className, ...props }: SearchProps): JSX.Element => {
    const [search, setSearch] = useState<string>('');
    const router = useRouter();

    const goToSearch = () => {
        router.push({
            pathname: '/search',
            query: {
                search
            }
        }).then();
    };

    const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key == 'Enter') {
            goToSearch();
        }
    };

  return (
      <div className={cn(className, s.search )} {...props}>
          <Input
              className={s.input}
              placeholder='Поиск...'
              value={search}
              onChange={e => setSearch(e.target.value)}
              onKeyDown={handleKeyDown}
          />
          <Button
              appearance='primary'
              className={s.button}
              onClick={goToSearch}
          >
              <SearchIcon />
          </Button>
      </div>
  );
};