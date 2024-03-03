import InputMain from "@/components/atoms/InputMain";
import BookList from "@/components/organisms/BookList";
import { staticBookList } from "@/components/organisms/BookList/arrays";
import TemplateDefault from "@/components/templates/TemplateDefault";
import { useRouter } from "next/router";

function Search() {

  return (
    <TemplateDefault>
      <BookList bookData={staticBookList}/>
    </TemplateDefault>
  )
}

export default Search;
