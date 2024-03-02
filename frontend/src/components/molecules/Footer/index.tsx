import styled from "styled-components";

export default function Footer() {
    return (
        <FooterContainer>
          <FooterContent>
            <span>BookFind</span>
            <ul>
              <li>Github</li>
              <li>Sobre</li>
            </ul>
          </FooterContent>
        </FooterContainer>
    );
}

const FooterContainer = styled.footer`
  width: 100%;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;

  ul {
    list-style: none;
    display: flex;
    gap: 16px;
  }
`;

const FooterContent = styled.div`
  max-width: 1300px;
  width: 100%;
  display: flex;
  justify-content: space-between;
`
