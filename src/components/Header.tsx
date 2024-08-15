import Link from "next/link";
import { UserNav } from "./UserNav";
import { Container } from "./Container";

export const Header = () =>{
    return <header className="header">
        <Container>
            <nav className="nav">
            <Link className="logo" href='/'><svg className="svg" width={30} height={30}>
                <use href='/sprite.svg#icon-logo'></use>
                </svg>
                <span className="text">CarRental</span>    
            </Link>
            <UserNav/>
            </nav>
        </Container>
        </header>
}