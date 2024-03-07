import NoResults from "@/components/atoms/NoResults";
import { BookElementProps } from "@/components/molecules/BookElement";
import BookList from "@/components/organisms/BookList";
import TemplateDefault from "@/components/templates/TemplateDefault";
import { getBooks } from "@/utils/requests";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

function Search() {
    const router = useRouter();
    const [searchBookList, setSearchBookList] = useState<BookElementProps[]>();

    async function getSearchedBooks() {
        const res = await getBooks(router.query.q as string);
        console.log(res);
        setSearchBookList(res);
    }

    useEffect(() => {
        if (router.query.q) {
            getSearchedBooks();
        }
    }, [router]);

    return (
        <TemplateDefault>
            {searchBookList && <BookList bookData={searchBookList} />}
        </TemplateDefault>
    );
}

export default Search;
