import React, { useState, useEffect } from 'react';
import PatternLock from 'react-pattern-lock';

const ReactPatternLock = ({ onPatternChange }) => {
    const [path, setPath] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);
    const [disabled, setDisabled] = useState(false);
    const [size, setSize] = useState(3);

// Enable When you need more number of dots or pattern points it will increase the security    

    // useEffect(() => {


    //     const handleKeyDown = (event) => {
    //         if (event.which === 38) {
    //             setSize((prevSize) => (prevSize >= 10 ? 10 : prevSize + 1));
    //         } else if (event.which === 40) {
    //             setSize((prevSize) => (prevSize > 3 ? prevSize - 1 : 3));
    //         }
    //     };

    //     window.addEventListener('keydown', handleKeyDown);

    //     return () => {
    //         window.removeEventListener('keydown', handleKeyDown);
    //     };


    // }, []);

    const onReset = () => {
        setPath([]);
        setSuccess(false);
        setError(false);
        setDisabled(false);
    };

    const onChange = (newPath) => {
        setPath([...newPath]);
        // Pass pattern value to the parent component
        onPatternChange(newPath.join(''));
    };

    const onFinish = () => {
        setIsLoading(true);
        setTimeout(() => {
            if (path.join('-') === '0-1-2') {
                setIsLoading(false);
                setSuccess(true);
                setDisabled(true);
            } else {
                setDisabled(true);
                setError(true);
                setTimeout(() => {
                    setDisabled(false);
                    setError(false);
                    setIsLoading(false);
                    setPath([]);
                }, 2000);
            }
        }, 1000);
    };


    // need to select minimum 3 dots 

    return (
        <>
            <div className="center">
                <PatternLock
                    size={size}
                    onChange={onChange}
                    path={path}
                    error={error}
                    onFinish={onFinish}
                    connectorThickness={5}
                    disabled={disabled || isLoading}
                    success={success}
                />
            </div>
            <div className="output">Pattern Sequence : {path.join(', ')}</div>

{/* Also Enable this to Change the no.of dots  */}

            {/* <div className="output">
                Press the up/down arrow keys to increase/decrease the size of the input
            </div> */}
        </>
    );
};

export default ReactPatternLock;

// Copy paste this code in your new created reactjs file 

// then import this Component where you want 

// And also we neet to pass the call back function to get the pattern sequence 

// like  

{/* 

in componenet 1 : 

    import the react page where the code you copied and pasted

    create a useState 

    install -> npm i react-pattern-lock

    ------------------------------------------------------------

        import ReactPatternLock from './ReactPatternLock';

        const [pattern, setPattern] = useState('');

        const handlePatternChange = (value) => {
            setPatternValue(value);
        };

        <ReactPatternLock onPatternChange={handlePatternChange} />


in component 2 :

        paste the entire code you copied

            import React, { useState, useEffect } from 'react';
            import PatternLock from 'react-pattern-lock';

            const ReactPatternLock = ({ onPatternChange }) => {

                / .... 

                ..... /

            }


*/}
