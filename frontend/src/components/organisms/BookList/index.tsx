import styled from "styled-components";
import BookElement, { ButtonAction } from "../../molecules/BookElement";

export default function BookList() {
    return (
        <BookListContainer>
            <BookListContent>
                <BookElement />
                <BookElement />
                <BookElement />
                <BookElement />
                <BookElement />
                <BookElement />
                <BookElement />
                <BookElement />
                <BookElement />
                <BookElement />
                <BookElement />
                <BookElement />
                <BookElement />
                <BookElement />
                <BookElement />
                <BookElement />
            </BookListContent>
            <BookListAside>
                <AsideCard>
                    <h2>Boas vindas</h2>
                    <p>Busque, cadastre e edite seu catalogo agora mesmo!</p>
                    <img src='images/ImageWelcome.svg' width='100%'/>
                </AsideCard>
                <AsideCard>
                    <h2>Ferramentas</h2>
                    <ButtonTool color="green">
                        Cadastrar Livro
                    </ButtonTool>
                    <ButtonTool color='#001CFF'>
                        Painel administrativo
                    </ButtonTool>
                </AsideCard>
            </BookListAside>
        </BookListContainer>
    );
}


const ButtonTool = styled(ButtonAction)`
    width: 100%;
    height: 50px;
    margin: 6px 0;

`

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

    position: sticky;
    top: 12px;
`;

const AsideCard = styled.div<{customHeight?: number}>`
    background-color: white;
    padding: 8px 16px;
    border-radius: 16px;
    min-height: ${({customHeight}) => customHeight ? customHeight : 'max-content'}px;

    img {
        width: 100%;
        margin: 16px 0;
    }
`;

const BookListContainer = styled.div`
    min-height: 50vh;
    margin-top: 24px;
    width: 100%;

    display: flex;
    gap: 16px;
`;
