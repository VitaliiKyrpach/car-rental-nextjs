import '../styles/index.scss'
import Image from "next/image";
import car from '../img/car1.jpg'


export default function Home() {
  return (
    <main className='main'>
      <h1>Hello world</h1>
      <ul>
        <li>one</li>
        <li>two</li>
        <li>three</li>
      </ul>
      <Image src={car} alt='car'/>
    </main>
  );
}
