import styled from "styled-components";
import BookElement from "../../molecules/BookElement";

export default function BookList() {
    return (
        <BookListContainer>
            <BookListContent>
                <BookElement />
                <BookElement />
                <BookElement />
                <BookElement />
            </BookListContent>
            <BookListAside>
                <AsideCard customHeight={200} >
                    <h2>Boas vindas</h2>
                    <p>Busque, cadastre e edite seu catalogo agora mesmo!</p>
                </AsideCard>
                <AsideCard customHeight={400} >
                    <h2>Boas vindas</h2>
                    <p>Busque, cadastre e edite seu catalogo agora mesmo!</p>
                </AsideCard>
            </BookListAside>
        </BookListContainer>
    );
}
const BookListContent = styled.div`
    border-radius: 16px;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    gap: 1px;
    flex: 8;
`;

const BookListAside = styled.div`
    flex: 3;
    height: 20px;
    display: flex;
    flex-direction: column;
    gap: 16px;
`;

const AsideCard = styled.div<{customHeight?: number}>`
    background-color: white;
    padding: 8px 16px;
    border-radius: 16px;
    min-height: ${({customHeight}) => customHeight ? customHeight : '150'}px;
`;

const BookListContainer = styled.div`
    min-height: 50vh;
    margin-top: 24px;
    width: 100%;

    display: flex;
    gap: 16px;
`;
