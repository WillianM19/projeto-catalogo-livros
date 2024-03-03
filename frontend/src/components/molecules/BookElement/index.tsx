import styled from "styled-components";
import Image from "next/image";
import IconBookDetail from "/public/icons/IconBookDetail.svg";
import IconRemoveBook from "/public/icons/IconRemoveBook.svg";
import IconEditBook from "/public/icons/IconEditBook.svg";
import Link from "next/link";
import { useRouter } from "next/router";

export interface BookElementProps {
    id: number;
    title: string;
    author: string;
    description: string;
    pageCount: number;
    year: string | number;
    bookImage: string;
}

export default function BookElement({
    title,
    author,
    description,
    pageCount,
    year,
    bookImage,
}: BookElementProps) {
    const router = useRouter();
    return (
        <BookElementContainer>
            <Link href={"/bookdetail"}>
                <BookImage>
                    <Image
                        src={bookImage}
                        height={168}
                        width={110}
                        alt=""
                        objectFit="contain"
                    />
                </BookImage>
            </Link>
            <Link href={"/bookdetail"}>
                <BookInfo>
                    <h2>{title}</h2>
                    <span className="author">{author}</span>
                    <p>{description}</p>
                    <div className="infoFooter">
                        <span>
                            <strong>Páginas:</strong> {pageCount}
                        </span>
                        <span>
                            <strong>Ano:</strong> {year}
                        </span>
                    </div>
                </BookInfo>
            </Link>
            <BookActions>
                <ButtonAction
                    color="#2eca50"
                    onClick={() => router.push("/bookdetail")}
                >
                    <Image
                        src={IconBookDetail}
                        width={14}
                        height={14}
                        alt="icone de adição"
                    />
                    Abrir
                </ButtonAction>
                <ButtonAction color="#001CFF">
                    <Image
                        src={IconEditBook}
                        width={14}
                        height={14}
                        alt="icone de adição"
                    />
                    Editar
                </ButtonAction>
                <ButtonAction color="#f35e5e">
                    <Image
                        src={IconRemoveBook}
                        width={14}
                        height={14}
                        alt="icone de adição"
                    />
                    Remover
                </ButtonAction>
            </BookActions>
        </BookElementContainer>
    );
}

export const ButtonAction = styled.button<{ color: string }>`
    background-color: #35323d;

    color: white;
    border-radius: 8px;
    padding: 6px 12px;

    display: flex;
    align-items: center;
    gap: 6px;
    font-size: 12px;
    cursor: pointer;

    border: none;
    transition: 100ms;

    &:hover {
        filter: drop-shadow(0 0 5px ${({ color }) => color}80);
        background-color: ${({ color }) => color};
        opacity: 0.8;
    }

    img {
        filter: brightness(0) saturate(100%) invert(100%) sepia(18%)
            saturate(3464%) hue-rotate(56deg) brightness(130%) contrast(120%);
    }
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
    cursor: pointer;
    background-color: white;
    padding: 16px 24px;

    display: flex;
    gap: 24px;
    height: 200px;
`;

const BookImage = styled.div`
    display: flex;
    align-items: center;
    img {
        height: 100%;
        border-radius: 8px;
    }
`;
const BookInfo = styled.div`
    display: flex;
    flex-direction: column;

    .author {
        opacity: calc(0.4);
    }

    p {
        max-width: 600px;
        height: 65px;
        margin: 12px 0;
        overflow: hidden;
        line-height: normal;

        font-size: 14px;
        text-overflow: ellipsis;

        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
    }

    .infoFooter {
        display: flex;
        gap: 16px;
        font-size: 14px;
    }
`;
