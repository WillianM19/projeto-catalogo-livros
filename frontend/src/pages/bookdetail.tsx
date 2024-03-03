import InputMain from "@/components/atoms/InputMain";
import BookDetail from "@/components/organisms/BookDetail";
import BookList from "@/components/organisms/BookList";
import TemplateDefault from "@/components/templates/TemplateDefault";
import styled from "styled-components";

function App() {
  return (
    <TemplateDefault>
      <BookDetailWrapper>
        <h1>Senhor dos aneis</h1>
        <DivBookContent>
          <BookImage>

          </BookImage>
        </DivBookContent>

      </BookDetailWrapper>
    </TemplateDefault>
  )
}

export default App;

const BookDetailWrapper = styled.div`
  width: 100%;
  height: 100vh;
  border-radius: 16px;
  background-color: white;

  padding: 25px 48px;
`

const DivBookContent = styled.div``
const BookImage = styled.div``