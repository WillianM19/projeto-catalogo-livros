import styled from "styled-components";

export default function InputMain() {
    return (
        <InputContainer>
            <img src="icons/IconSearch.svg" />
            <input type="text" placeholder="Busque seu livro aqui..."/>
        </InputContainer>
    );
}

const InputContainer = styled.div`
    width: 100%;
    height: 50px;
    border-radius: 16px;
    background-color: white;
    position: relative;
    
    
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
