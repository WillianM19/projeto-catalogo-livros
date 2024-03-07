import styled from "styled-components";
import Image from "next/image";
import ImageNoResults from '/public/images/ImageNoResults.svg'

export default function NoResults() {
    return <DivNoResults>
        <Image src={ImageNoResults} width={350} height={350} alt='Image No Results'/>
        <h2>Nenhum Livro Encontrado!</h2>

    </DivNoResults>
}

const DivNoResults = styled.div`
    height: 558px;
    border-radius: 16px;
    background-color: white;

    padding: 25px 48px;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;
    flex: 8;
`