import React from 'react';

const Hello = () => {
    return (
        <div className="hello-container">
            <h1>Hello, World!</h1>
            <p>Welcome to the JSX tutorial.</p>
        </div>

        /*
        return React.createElement(
            'div',
            { className: 'hello-container' },
            React.createElement('h1', null, 'Hello, World!'),
            React.createElement('p', null, 'Welcome to the JSX tutorial.')
        );
        */
    );
}
export default Hello;