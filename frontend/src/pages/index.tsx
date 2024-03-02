import InputMain from "@/components/atoms/InputMain";
import BookList from "@/components/organisms/BookList";
import TemplateDefault from "@/components/templates/TemplateDefault";

function App() {
  return (
    <TemplateDefault>
      <InputMain/>
      <BookList />
    </TemplateDefault>
  );
}

export default App;
