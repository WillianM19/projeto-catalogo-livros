import { useRouter } from "next/router";
import { useState } from "react";
import styled from "styled-components";
import Image from "next/image";
import IconSearch from "/public/icons/IconSearch.svg";

interface inputMainProps {
    value?: string;
}

export default function InputMain({ value }: inputMainProps) {
    const router = useRouter();
    const [valueState, setValueState] = useState(
        (router.query.q as string) || value
    );

    return (
        <InputContainer>
            <Image
                src={IconSearch}
                width={16}
                height={16}
                alt="icone de busca"
            />
            <input
                type="text"
                placeholder="Busque seu livro aqui..."
                value={valueState}
            />
        </InputContainer>
    );
}

const InputContainer = styled.div`
    width: 40%;
    height: 40px;
    border-radius: 18px;
    background-color: white;
    position: relative;
    border: 1px solid #35323d44;

    img {
        position: absolute;
        top: 50%;
        left: 16px;
        transform: translateY(-50%);
    }

    input {
        width: 100%;
        padding-left: 48px;
        height: 100%;
        border: none;
        outline: none;
        font-size: 18px;
        border-radius: 16px;
    }
`;
