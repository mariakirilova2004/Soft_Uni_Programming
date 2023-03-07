import React from 'react';

export default function Timer(props) {
    const [seconds, SetSeconds] = React.useState(props.start);

    setTimeout(() =>(
        SetSeconds((seconds) => seconds + 1)
    ), 1000);

    return(
        <div>
            Time: {seconds}s
        </div>
    );
}