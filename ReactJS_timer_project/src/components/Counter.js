import React from "react";

export default function Counter(props) {
    const [count, SetCount] = React.useState(props.start);    

    function OnClickPlusButtonHandler(e) {
        React.useState(
            SetCount(state => state + 1)
        );
    };

    function OnClickMinusButtonHandler(e) {
        React.useState(
            SetCount(state => state - 1)
        );
    };

    function OnClickNullButtonHandler(e) {
        React.useState(
            SetCount(state => state = 0)
        );
    };

    return(
        <div>
            <h1>
                Counter: {count}
            </h1>
            <button onClick={OnClickPlusButtonHandler}>
                +
            </button>
            <button onClick={OnClickNullButtonHandler}>
                0
            </button>
            <button onClick={OnClickMinusButtonHandler}>
                -
            </button>
        </div>
    );
}