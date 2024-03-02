import { ReactNode } from "react";
import styled from "styled-components";
import Header from "../../molecules/Header";
import Footer from "../../molecules/Footer";

interface templateDefaultProps {
    children: ReactNode;
}

export default function TemplateDefault({ children }: templateDefaultProps) {
    return (
        <DivTemplateDefault>
            <Header />
            <DivContent>{children}</DivContent>
            <Footer />
        </DivTemplateDefault>
    );
}

const AsideContent = styled.aside`
    width: 20%;
    background-color: red;
    height: 100px;
`;

const DivContent = styled.div`
    max-width: 1300px;
    width: 100%;
    flex: 1;
    margin: 16px 0;
`;

const DivTemplateDefault = styled.div`
    min-height: 100vh;

    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #eaeaea;
`;
