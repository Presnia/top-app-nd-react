import { Htag, Button, P } from '../components/';


export default function Home(): JSX.Element {
  
  return (
    <>
      <Htag tag="h1">Text</Htag>
      <Button appearance='primary' arrow='right'>Button</Button>
      <Button appearance='ghost' arrow='down'>Button</Button>
      <P size='l'>Large</P>
      <P>Medium</P>
      <P size='s'>Small</P>
    </>
  );
}
