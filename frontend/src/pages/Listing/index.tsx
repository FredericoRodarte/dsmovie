import axios from "axios";
import MovieCard from "components/MovieCard";
import Pagination from "components/Pagination/Index";
import { useEffect, useState } from "react";
import { MoviePage } from "types/movie";
import { BASE_URL } from "utils/requests";


function Listing(): JSX.Element {

    const [pageNumber, setPageNumber] = useState(0);

    const [page, SetPage] = useState<MoviePage>({
        content: [],
        last: true,
        totalPages: 0,
        totalElements: 0,
        size: 12,
        number: 0,
        first: true,
        numberOfElements: 0,
        empty: true
    });

    useEffect(() => {
        axios.get(`${BASE_URL}/movies?size=12&page=${pageNumber}&sort=title`)
            .then(response => {
                const data = response.data as MoviePage;
                SetPage(data);
            });
    }, [pageNumber]);

    const handlePageChange = (newPageNumber : number) => {
        setPageNumber(newPageNumber);
    }

    return (
        <>
            <Pagination page={page} onChange = {handlePageChange}/>

            <div className="cotainer">
                <div className="row">

                    {page.content.map(movie => (
                        <div key={movie.id} className="col-lg-6 col-lg-4 col-xl-3 mb-3">
                            <MovieCard movie={movie} />
                        </div>
                    )
                    )}

                </div>
            </div>

        </>
    )
}

export default Listing;