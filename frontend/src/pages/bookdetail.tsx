import TemplateDefault from "@/components/templates/TemplateDefault";
import styled from "styled-components";
import Image from "next/image";
import { ButtonAction } from "@/components/molecules/BookElement";
import IconRemoveBook from "/public/icons/IconRemoveBook.svg";
import IconEditBook from "/public/icons/IconEditBook.svg";
import IconBack from "/public/icons/IconBack.svg";
import { Router, useRouter } from "next/router";

function BookDetail() {
    const router = useRouter();
    return (
        <TemplateDefault>
            <BookDetailWrapper>
                <BookImage>
                    <Image
                        src="https://m.media-amazon.com/images/I/41RBd2DvmgL._SY445_SX342_.jpg"
                        layout="fill"
                        alt="capa"
                    />
                </BookImage>
                <ContentContainer>
                    <h1>Senhor dos aneis</h1>
                    <span className="author">
                        Escrito por • J. R. R. Tolkien
                    </span>
                    <p>
                        A Sociedade do Anel começa no Condado, a região rural do
                        oeste da Terra-média onde vivem os diminutos e pacatos
                        hobbits. Bilbo Bolseiro, um dos raros aventureiros desse
                        povo, cujas peripécias foram contadas em O Hobbit,
                        resolve ir embora do Condado e deixa sua considerável
                        herança nas mãos de seu jovem parente Frodo A Sociedade
                        do Anel começa no Condado, a região rural do oeste da
                        Terra-média onde vivem os diminutos e pacatos hobbits.
                        Bilbo Bolseiro, um dos raros aventureiros desse povo,
                        cujas peripécias foram contadas em O Hobbit, resolve ir
                        embora do Condado e deixa sua considerável herança nas
                        mãos de seu jovem parente Frodo A Sociedade do Anel
                        começa no Condado, a região rural do oeste da
                        Terra-média onde vivem os diminutos e pacatos hobbits.
                        Bilbo Bolseiro, um dos raros aventureiros desse povo,
                        cujas peripécias foram contadas em O Hobbit, resolve ir
                        embora do Condado e deixa sua considerável herança nas
                        mãos de seu jovem parente Frodo A Sociedade do Anel
                        começa no Condado, a região rural do oeste da
                        Terra-média onde vivem os diminutos e pacatos hobbits.
                        Bilbo Bolseiro, um dos raros aventureiros desse povo,
                        cujas peripécias foram contadas em O Hobbit, resolve ir
                        embora do Condado e deixa sua considerável herança nas
                        mãos de seu jovem parente Frodo.
                    </p>
                    <DivContentInfos>
                        <span>
                            <strong>Ano de lançamento:</strong> 2022
                        </span>
                        <span>
                            <strong>Quantidade de páginas:</strong> 300
                        </span>
                    </DivContentInfos>
                    <DivButtonActions>
                        <ButtonActionDetail
                            color="#2eca50"
                            onClick={() => router.back()}
                        >
                            <Image
                                src={IconBack}
                                width={16}
                                height={16}
                                alt="icone de adição"
                            />
                            Voltar
                        </ButtonActionDetail>
                        <ButtonActionDetail color="#001CFF">
                            <Image
                                src={IconEditBook}
                                width={16}
                                height={16}
                                alt="icone de adição"
                            />
                            Editar
                        </ButtonActionDetail>
                        <ButtonActionDetail color="#f35e5e">
                            <Image
                                src={IconRemoveBook}
                                width={16}
                                height={16}
                                alt="icone de adição"
                            />
                            Remover
                        </ButtonActionDetail>
                    </DivButtonActions>
                </ContentContainer>
            </BookDetailWrapper>
        </TemplateDefault>
    );
}

export default BookDetail;

const DivButtonActions = styled.div`
    display: flex;
    gap: 16px;

    position: absolute;
    bottom: 25px;
    right: 48px;
`;

const ButtonActionDetail = styled(ButtonAction)`
    height: 60px;
    width: 120px;

    font-size: 16px;
`;

const DivContentInfos = styled.div`
    font-size: 14px;
    span {
        display: block;
    }
`;

const ContentContainer = styled.div`
    flex: 1;
    .author {
        opacity: 0.5;
    }
    p {
        display: block;
        margin: 16px 0;
        height: 100%;
        max-height: 200px;
        overflow: hidden;
    }
`;

const BookDetailWrapper = styled.div`
    width: 100%;
    height: 550px;
    border-radius: 16px;
    background-color: white;

    padding: 25px 48px;
    display: flex;
    gap: 32px;
    position: relative;
`;

const BookImage = styled.div`
    width: 330px;
    height: 500px;
    position: relative;

    img {
        border-radius: 16px;
    }
`;
