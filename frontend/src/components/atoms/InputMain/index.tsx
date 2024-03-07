import { useRouter } from "next/router";
import { useRef, useState } from "react";
import styled from "styled-components";
import Image from "next/image";
import IconSearch from "/public/icons/IconSearch.svg";

export default function InputMain({compact}: {compact?: boolean}) {
    const router = useRouter();
    const [valueState, setValueState] = useState(
        (router.query.q as string) || ''
    );

    function handleSearch() {
        window.open(`/search?q=${valueState}`, '_self')
    }

    const inputRef = useRef<HTMLInputElement>(null);

    return (
        <InputContainer compact={compact}>
            <Image
                src={IconSearch}
                width={16}
                height={16}
                alt="icone de busca"
                onClick={handleSearch}
            />
            <input
                type="text"
                placeholder="Busque seu livro aqui..."
                defaultValue={valueState}
                onChange={(e) => setValueState(e.target.value)}
                onKeyDown={(e) => e.key == 'Enter' && handleSearch()}
                ref={inputRef}
            />
        </InputContainer>
    );
}

const InputContainer = styled.div<{compact?: boolean}>`
    width: ${({compact}) => compact ? '40%': '100%'} ;
    height: 50px;
    border-radius: 16px;
    background-color: white;
    position: relative;
    border: ${({compact}) => compact && '1px solid #0000001c'};
    
    
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
