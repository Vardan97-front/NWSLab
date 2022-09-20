import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

// Functions
import {getCategories, getCats} from "../store/actions/cats";

// Components
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import Image from "../components/Image";
import Button from "../components/Button";

export default function Home() {
    const dispatch = useDispatch();

    const {
        currentPage,
        cats,
        loadingCats,
        selectedCategories,
    } = useSelector((state) => state.cats);

    const loadMore = () => {
        dispatch(getCats(currentPage + 1, selectedCategories))
    }

    useEffect(() => {
        dispatch(getCategories())
        dispatch(getCats(currentPage))
    }, []);

    return (
        <div className="cats">
            <Header />

            <section className="catsBlock">
                <Sidebar />

                <div className="catImagesBlock">
                    <div className="catImages">
                        {cats.map((cat) => (
                            <Image image={cat.url} key={cat.id} />
                        ))}
                    </div>

                    <Button
                        type={true}
                        title="Load More"
                        loading={loadingCats}
                        click={loadMore}
                    />
                </div>
            </section>
        </div>
    );
}
