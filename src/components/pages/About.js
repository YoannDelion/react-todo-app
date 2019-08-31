import React from 'react';

function Header() {
    return (
        //React.Fragment avoid using a div element
        //<React.Fragment >
        <div className='aboutPage'>
            <h1>About</h1>
            <p>
                This is the TodoList App v1.0.0.<br/>
                It is part of <a href='https://www.youtube.com/watch?v=sBws8MSXN7A'>Traversy media's React crash course</a>
            </p>
        </div>
    )
}

export default Header;