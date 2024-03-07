import InputMain from "@/components/atoms/InputMain";
import { BookElementProps } from "@/components/molecules/BookElement";
import BookList from "@/components/organisms/BookList";
import { staticBookList } from "@/components/organisms/BookList/arrays";
import TemplateDefault from "@/components/templates/TemplateDefault";
import { getBooks } from "@/utils/requests";
import { useEffect, useState } from "react";

function App() {
    const [bookList, setBookList] = useState<BookElementProps[]>();

    async function getBookData() {
        const res = await getBooks();
        setBookList(res)
    }
    useEffect(() => {
        getBookData();
    }, []);

    return (
        <TemplateDefault>
            <InputMain />
            {bookList && <BookList bookData={bookList} />}
        </TemplateDefault>
    );
}

export default App;
