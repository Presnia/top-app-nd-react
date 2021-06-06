import Button from '../components/Button/Button';
import Htag from '../components/Htag/Htag';


export default function Home(): JSX.Element {
  
  return (
    <>
      <Htag tag="h1">Text</Htag>
      <Button appearance='primary' arrow='right'>Button</Button>
      <Button appearance='ghost' arrow='down'>Button</Button>
    </>
  );
}
