import React from 'react';

const ValidationComponent = (props) => {
    const {inputLength, minimumLength} = props;
    const result = inputLength < minimumLength ? 'Text too short!' : 'Text long enough!';

    return <div>{result}</div>;
}

export default ValidationComponent;