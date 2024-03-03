import InputMain from "@/components/atoms/InputMain";
import BookList from "@/components/organisms/BookList";
import { staticBookList } from "@/components/organisms/BookList/arrays";
import TemplateDefault from "@/components/templates/TemplateDefault";

function App() {
  return (
    <TemplateDefault>
      <InputMain/>
      <BookList bookData={staticBookList}/>
    </TemplateDefault>
  )
}

export default App;
