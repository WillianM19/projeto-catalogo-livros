import styled from "styled-components";

export default function Header() {
    return (
        <HeaderContainer>
            <h1>BookFind</h1>
        </HeaderContainer>
    );
}

const HeaderContainer = styled.header`
  width: 100%;
  background-color: white;
  height: 120px;

  display: flex;
  align-items: center;
  justify-content: center;

`;
