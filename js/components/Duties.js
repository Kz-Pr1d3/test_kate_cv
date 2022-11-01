import '../App.css';
import { useState } from "react";

const Duties = (props) => {
    // console.log(props)
    const [isShown, setIsShown] = useState({
        itemsToShow: 2,
        expanded: false,
    })

    const showMore = () => {
        isShown.itemsToShow === 2 ? (
            setIsShown({ itemsToShow: props.duties.length, expanded: true })
        ) : (
            setIsShown({ itemsToShow: 2, expanded: false })
        )
      };
    return (
        <>
        {props.duties.slice(0, isShown.itemsToShow).map((duty) => (
            <li>
                {duty}

            </li>
        ))}
            <span className="show-more-span" onClick={showMore}>
                {isShown.expanded ? (
                    <span>Show less</span>
                ) : (
                    <span>Show more</span>
                )}
            </span>
        </>
       
    )
}

export default Duties