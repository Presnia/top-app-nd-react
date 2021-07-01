import { GetStaticProps } from "next";
import { Htag, Button, P, Tag, Rating } from '../components/';
import { useState } from "react";
import { withLayout } from "../layout/Layout";
import axios from "axios";
import {MenuItem} from "../interfaces/menu.interfaces";

function Home({ menu }: HomeProps): JSX.Element {
    const [rating, setRating] = useState<number>(0);
  
  return (
    <>
      <Htag tag="h1">Title</Htag>
      <Button appearance='primary' arrow='right'>Button</Button>
      <Button appearance='ghost' arrow='down'>Button</Button>
      <P size='l'>Large</P>
      <P>Medium</P>
      <P size='s'>Small</P>
      <Tag>Ghost</Tag>
      <Tag size='l' color='red'>Red</Tag>
      <Tag size='m' color='green'>Green</Tag>
      <Tag color='primary'>Primary</Tag>
      <Rating rating={rating} isEditable={true} setRating={setRating}  />
        <ul>
            {menu.map(el => (<li key={el._id.secondCategory}>{el._id.secondCategory}</li>))}
        </ul>
    </>
  );
}

export default withLayout(Home);

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
    const firstCategory = 0;
    const { data: menu } = await axios.post<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find', {
        firstCategory
    });
    return {
        props: {
          menu,
          firstCategory
        }
    };
};

interface HomeProps extends Record<string, unknown>{
    menu: MenuItem[];
    firstCategory: number;
}