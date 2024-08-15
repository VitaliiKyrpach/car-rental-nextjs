import { CardList } from "@/components/CardList";
import { Container } from "@/components/Container";
import { Filter } from "@/components/Filter";

export default function CatalogPage(){
    return <Container>
        <Filter/>
        <CardList/>
        </Container>
}