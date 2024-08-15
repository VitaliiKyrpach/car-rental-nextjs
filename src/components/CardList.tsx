import { FC } from "react";
import { CardItem } from "./CardItem";
import { Card } from "./CardItem";
// async function fetchData() {
//     const data = await fetch('https://65283a8c931d71583df210de.mockapi.io/adverts');
//     const res = await data.json()
//    return res;
//   }

export const CardList = async() =>{
    const data = await fetch('https://65283a8c931d71583df210de.mockapi.io/adverts');
    const res = await data.json()
    console.log(res)
    return <div>
        <ul className="catalogList">
            {res.map((item: Card) => <CardItem key={item.id} data={item}/>)}
        </ul>
    </div>
}