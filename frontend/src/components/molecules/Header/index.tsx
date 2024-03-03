import InputHeader from "@/components/atoms/InputHeader";
import InputMain from "@/components/atoms/InputMain";
import { useRouter } from "next/router";
import styled from "styled-components";

interface headerProps {
    compact?: boolean;
}

export default function Header({ compact }: headerProps) {
    const router = useRouter();
    return (
        <HeaderContainer compact={compact}>
            <HeaderContent compact={compact}>
                <h1 onClick={() => router.push("/")}>BookFind</h1>
                {compact && <InputHeader />}
            </HeaderContent>
        </HeaderContainer>
    );
}

const HeaderContainer = styled.header<{ compact?: boolean }>`
    width: 100%;
    background-color: white;
    height: ${({ compact }) => (compact ? "70px" : "120px")};

    display: flex;
    align-items: center;
    justify-content: center;
`;

const HeaderContent = styled.div<{ compact?: boolean }>`
    max-width: 1300px;
    width: 100%;
    font-size: ${({ compact }) => compact && "14px"};
    display: flex;
    align-items: center;
    justify-content: ${({ compact }) => (compact ? "space-between" : "center")};

    h1 {
        cursor: pointer;
    }
`;
