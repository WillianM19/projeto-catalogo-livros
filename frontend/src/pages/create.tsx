import InputMain from "@/components/atoms/InputMain";
import BookList from "@/components/organisms/BookList";
import { staticBookList } from "@/components/organisms/BookList/arrays";
import TemplateDefault from "@/components/templates/TemplateDefault";
import { useRouter } from "next/router";
import styled from "styled-components";
import Image from "next/image";
import {
    BookElementProps,
    ButtonAction,
} from "@/components/molecules/BookElement";
import { ChangeEvent, MouseEventHandler, useEffect, useState } from "react";
import { createBook } from "@/utils/requests";

function Create() {
    const router = useRouter()
    const [formState, setFormState] = useState<BookElementProps>({
        id: 0,
        title: "",
        author: "",
        description: "",
        year: 0,
        pageCount: 0,
        bookImage: "",
    });
    async function handleSubmit() {
        const res = await createBook(formState)
        if (res.id) {
            alert('Cadastrado com sucesso!')
            router.replace('/')
        }
    }

    return (
        <TemplateDefault>
            <DivFormCreate>
                <h1>Cadastrar livro:</h1>
                <DivInput>
                    <label>Titulo</label>
                    <input
                        type="text"
                        placeholder="Título do livro"
                        required
                        onChange={(e) =>
                            setFormState((prev) => {
                                return {
                                    ...prev,
                                    title: e.target.value,
                                };
                            })
                        }
                    />
                </DivInput>
                <DivInput>
                    <label>Autor</label>
                    <input
                        type="text"
                        placeholder="Autor do livro"
                        required
                        onChange={(e) =>
                            setFormState((prev) => {
                                return {
                                    ...prev,
                                    author: e.target.value,
                                };
                            })
                        }
                    />
                </DivInput>
                <DivInput>
                    <label>Descrição</label>
                    <textarea
                        draggable={false}
                        placeholder="Descrição do livro"
                        required
                        maxLength={1000}
                        onChange={(e) =>
                            setFormState((prev) => {
                                return {
                                    ...prev,
                                    description: e.target.value,
                                };
                            })
                        }
                    />
                </DivInput>
                <DivInput>
                    <label>Ano de Lançamento</label>
                    <input
                        type="text"
                        placeholder="Ano de publicação"
                        required
                        onChange={(e) =>
                            setFormState((prev) => {
                                return {
                                    ...prev,
                                    year: e.target.value,
                                };
                            })
                        }
                    />
                </DivInput>
                <DivInput>
                    <label>Quantidade de páginas</label>
                    <input
                        type="text"
                        placeholder="Total de páginas"
                        required
                        onChange={(e) =>
                            setFormState((prev) => {
                                return {
                                    ...prev,
                                    pageCount: Number(e.target.value),
                                };
                            })
                        }
                    />
                </DivInput>
                <DivInput>
                    <label>Link de imagem da capa</label>
                    <input
                        type="text"
                        placeholder="Imagem da capa"
                        required
                        onChange={(e) =>
                            setFormState((prev) => {
                                return {
                                    ...prev,
                                    bookImage: e.target.value,
                                };
                            })
                        }
                    />
                </DivInput>
                <DivImageAside>
                    <Image
                        src="images/ImageForm.svg"
                        width={400}
                        height={400}
                        alt="image"
                    />
                </DivImageAside>
                <ButtonAction
                    className="submit"
                    color="#2eca50"
                    onClick={(e) => {
                        e.preventDefault();
                        handleSubmit();
                    }}
                >
                    Registrar
                </ButtonAction>
            </DivFormCreate>
        </TemplateDefault>
    );
}

export default Create;

const DivImageAside = styled.div`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 48px;
`;

const DivInput = styled.div`
    /* background-color: red; */
    display: flex;
    justify-content: space-between;
    max-width: 500px;
    margin-top: 8px;
    padding-bottom: 8px;
    border-bottom: 1px solid #00000014;

    input,
    textarea {
        border-radius: 8px;
        border: 1px solid #0000002f;
        outline: none;
        padding: 4px 8px;
        width: 250px;
        resize: none;
    }
    textarea {
        height: 150px;
    }
`;

const DivFormCreate = styled.form`
    width: 100%;
    height: max-content;
    background-color: white;
    border-radius: 16px;
    padding: 25px 48px;
    position: relative;
    h1 {
        margin-bottom: 24px;
    }
    .submit {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100px;
        height: 50px;
        margin-top: 16px;
    }
`;
