import '../styles/index.scss'
import Image from "next/image";
import car from '../img/car1.jpg'
import { Container } from '@/components/Container';


export default function Home() {
  return (
    <main>
      <Container>
      <Image src={car} alt='car'/>
      </Container>
    </main>
  );
}
