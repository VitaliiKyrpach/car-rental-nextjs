import Image from "next/image";
import { FC} from "react";

export interface Card {
	id: number;
	year: number;
	make: string;
	model: string;
	type: string;
	img: string;
	description: string;
	fuelConsumption: string;
	engineSize: string;
	accessories: string[];
	functionalities: string[];
	rentalPrice: string;
	rentalCompany: string;
	address: string;
	rentalConditions: string;
	mileage: number;
}

interface CatalogCardProps {
	data: Card;
}

export const CardItem: FC<CatalogCardProps> = ({data}) =>{
    const address = data.address.split(", ");
    return  (
        <li className="card">
			<svg className="heart" width={18} height={18}>
                <use href='/sprite.svg#icon-heart'></use>
            </svg>
			<div className="imgWrapper">
            <Image className='img' src={data.img} alt='car photo' width={100} height={100}/>
			</div>
            <div className='title'>
				<div className='titleWrapper'>
					<p className='brand'>{data.make}</p>
					<p className='colorAccent'>
						<span className='carModel'>{data.model},</span>
					</p>
					<p>{data.year}</p>
				</div>
				<p>{data.rentalPrice}</p>
			</div>
            <div className='infoWrapper'>
				<ul className='infoList'>
					<li className='infoItem'>{address[1]}</li>
					<li className='infoItem'>{address[2]}</li>
					<li className='infoItem'>{data.rentalCompany}</li>
					<li className='infoItem dots'>Premium</li>
				</ul>
				<ul className='infoList'>
					<li className='infoItem'>{data.type}</li>
					<li className='infoItem'>{data.make}</li>
					<li className='infoItem'>{data.mileage}</li>
					<li className='infoItem dots'>
						{data.accessories[0]}
					</li>
				</ul>
			</div>
			<button
				type="button"
				className='cardBtn'
			>
				Learn more
			</button>
        </li>)
}