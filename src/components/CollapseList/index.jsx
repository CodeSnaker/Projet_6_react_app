import PropTypes from "prop-types";
import { useState } from "react";
import "./styles.scss";

const CollapseList = ({ category, entries }) => {
    const [clickedState, setClickedState] = useState(false);

    const handleClickChevron = () => {
        setClickedState((clickedState) => !clickedState);
    };

    let list = "";
    if (typeof entries === "string") {
        list = <p>{entries}</p>;
    } else {
        list = (
            <ul>
                {entries.map((entry, index) => {
                    return <li key={index}>{entry}</li>;
                })}
            </ul>
        );
    }

    return (
        <div className='collapse-bar'>
            <div className='top-bar' content={category}>
                <p className='top-bar-content'>{category}</p>
                <i
                    className={
                        "fa-solid fa-chevron-up " +
                        (clickedState ? "open" : "closed")
                    }
                    onClick={handleClickChevron}
                ></i>
            </div>
            <div
                className={
                    "collapse-text " + (clickedState ? "open" : "closed")
                }
            >
                {list}
            </div>
        </div>
    );
};

CollapseList.proptypes = {
    category: PropTypes.string.isRequired,
    entries: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.arrayOf(PropTypes.string),
    ]),
};

export default CollapseList;
