import MovieCard from "components/MovieCard";
import Pagination from "components/Pagination/Index";

function Listing() {
    return (
        <>
            <Pagination />

            <div className="cotainer">
                <div className="row">
                    <div className="col-lg-6 col-lg-4 col-xl-3 mb-3">
                        <MovieCard />
                    </div>
                    <div className="col-lg-6 col-lg-4 col-xl-3 mb-3">
                        <MovieCard />
                    </div>
                    <div className="col-lg-6 col-lg-4 col-xl-3 mb-3">
                        <MovieCard />
                    </div>
                    <div className="col-lg-6 col-lg-4 col-xl-3 mb-3">
                        <MovieCard />
                    </div>
                    <div className="col-lg-6 col-lg-4 col-xl-3 mb-3">
                        <MovieCard />
                    </div>                    
                </div>
            </div>

        </>
    )
}

export default Listing;