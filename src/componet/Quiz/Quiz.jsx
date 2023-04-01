import React from 'react';

const Quiz = () => {
    return (
        <div className='card'>
            <div>
                <div className='border-bottom'>
                    <h3 className='text-primary'>Props vs state?</h3>
                    <p>PROPS:Can set default values inside Component.Can not change inside Component.</p>
                    <p>STATE:Can set default values inside Component.Can change inside Component.</p>

                </div>
            </div>
            <div className='border-bottom'>
                <h3 className='text-primary'>How does useState work?</h3>
                <p>Usestate work:useState accepts an initial state and returns two values: The current state. A function that updates the state.the current state and a function to update it. The Hook takes an initial state value as an argument and returns an updated state value whenever the setter function is called</p>
            </div>
            <div className='border-bottom'>
                <h3 className='text-primary'>Purpose of useEffect other than fetching data?</h3>
                <p>The useEffect Hook allows you to perform side effects in your components. Some examples of side effects are: fetching data, directly updating the DOM, and timers. useEffect accepts two arguments. The second argument is optional.</p>
            </div>
            <div className='border-bottom'>
                <h3 className='text-primary'>How Does React work?</h3>
               <p>React divides the UI into isolated reusable pieces of code known as components. React components work similarly to JavaScript functions as they accept arbitrary inputs called properties or props. It's possible to have as many components as necessary without cluttering your code.</p> 
                
            </div>
            
        </div>
    );
};

export default Quiz;