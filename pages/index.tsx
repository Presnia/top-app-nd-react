import { Htag, Button, P, Tag, Rating } from '../components/';
import {useEffect, useState} from "react";


export default function Home(): JSX.Element {
    const [rating, setRating] = useState<number>(4);
  
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
    </>
  );
}
