import TemplateDefault from "@/components/templates/TemplateDefault";
import styled from "styled-components";
import Image from "next/image";
import {
    BookElementProps,
    ButtonAction,
} from "@/components/molecules/BookElement";
import IconRemoveBook from "/public/icons/IconRemoveBook.svg";
import IconEditBook from "/public/icons/IconEditBook.svg";
import IconBack from "/public/icons/IconBack.svg";
import { Router, useRouter } from "next/router";
import { deleteBook, getBookDetail } from "@/utils/requests";
import { useEffect, useLayoutEffect, useState } from "react";

export default function BookDetail() {
    const router = useRouter();
    const [bookData, setBookData] = useState<BookElementProps>();

    async function getBookData() {
        const res = await getBookDetail(Number(router.query.slug));
        setBookData(res);
    }
    useEffect(() => {
        if (router.query.slug) {
            getBookData();
        }
    }, [router]);

    async function removeBookContentInDetail() {
        if (bookData && confirm("Você deseja remover este livro?")) {
            await deleteBook(bookData?.id);
            alert("Livro Removido");
            router.replace("/");
        } else {
            console.log("Remoção cancelada");
        }
    }

    return (
        <TemplateDefault>
            <BookDetailWrapper>
                {bookData?.bookImage && (
                    <BookImage>
                        <Image
                            src={bookData?.bookImage}
                            layout="fill"
                            alt="capa"
                        />
                    </BookImage>
                )}
                <ContentContainer>
                    <h1>{bookData?.title}</h1>
                    <span className="author">
                        Escrito por • {bookData?.author}
                    </span>
                    <p>{bookData?.description}</p>
                    <DivContentInfos>
                        <span>
                            <strong>Ano de lançamento:</strong> {bookData?.year}
                        </span>
                        <span>
                            <strong>Quantidade de páginas:</strong>{" "}
                            {bookData?.pageCount}
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
                        <ButtonActionDetail
                            color="#001CFF"
                            onClick={() => router.push(`/edit/${bookData?.id}`)}
                        >
                            <Image
                                src={IconEditBook}
                                width={16}
                                height={16}
                                alt="icone de adição"
                            />
                            Editar
                        </ButtonActionDetail>
                        <ButtonActionDetail
                            color="#f35e5e"
                            onClick={removeBookContentInDetail}
                        >
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
