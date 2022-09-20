import React from 'react';
import {useDispatch, useSelector} from "react-redux";

// Components
import SidebarItem from "./SidebarItem";

// Functions
import { getCats } from "../../store/actions/cats";

function Sidebar() {
    const dispatch = useDispatch();

    const {
        categories,
        selectedCategories,
    } = useSelector((state) => state.cats);

    const filterCats = (categoryId) => {
        let filteredCategories = selectedCategories;

        if (filteredCategories.includes(categoryId)) {
            filteredCategories = filteredCategories.filter((category) => category !== categoryId);
        } else {
            filteredCategories.push(categoryId);
        }

        dispatch(getCats(1, filteredCategories));
    }

    return (
        <section className="sidebar">
            <div className="sidebarTitleBLock">
                <h2 className="sidebarTitle">
                    Cats Filter
                </h2>
            </div>

            <div className="sidebarTypesBlock">
                    {categories.map((category) => (
                        <SidebarItem
                            key={category.id}
                            id={category.id}
                            title={category.name}
                            selected={selectedCategories.includes(category.id)}
                            chooseType={filterCats}
                        />
                    ))}
            </div>
        </section>
    );
}

export default React.memo(Sidebar);
