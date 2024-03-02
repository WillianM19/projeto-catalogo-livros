import styled from "styled-components";

export default function BookElement() {
    return (
        <BookElementContainer>
            <BookImage>
                <img src="images/Placeholder.jpg" />
            </BookImage>
            <BookInfo>
                <h2>Senhor dos aneis</h2>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Veritatis nam aut harum mollitia doloribus corporis dolore,
                    sint labore soluta! Nihil assumenda esse id molestiae
                    corrupti deleniti minus, amet saepe officiis?
                </p>
                <div className="infoFooter">
                    <span>
                        <strong>Páginas:</strong> 259
                    </span>
                    <span>
                        <strong>Preço médio:</strong> R$100
                    </span>
                </div>
            </BookInfo>
            <BookActions>
                <ButtonAction color="green">Abrir</ButtonAction>
                <ButtonAction color="blue">Editar</ButtonAction>
                <ButtonAction color="red">Remover</ButtonAction>
            </BookActions>
        </BookElementContainer>
    );
}

const ButtonAction = styled.div<{ color: string }>`
    background-color: ${({ color }) => color};
    color: white;
    border-radius: 8px;
    padding: 6px;

    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 14px;
`;

const BookActions = styled.div`
    height: 100%;
    width: 100px;

    position: absolute;
    top: 0;
    right: 16px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 14px;
`;

const BookElementContainer = styled.div`
    position: relative;
    background-color: white;
    padding: 16px 24px;

    display: flex;
    gap: 24px;
    height: 200px;
`;

const BookImage = styled.div`
    img {
        height: 100%;
        border-radius: 8px;
    }
`;
const BookInfo = styled.div`
    display: flex;
    flex-direction: column;

    p {
        flex: 1;
        max-width: 600px;
        margin: 8px 0;
    }

    .infoFooter {
        display: flex;
        gap: 16px;
    }
`;
