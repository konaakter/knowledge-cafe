import React from 'react';

const Quiz = () => {
    return (
        <div>
            <div>
                <div>
                    <h3>Props vs state?</h3>
                    <p>PROPS:Can set default values inside Component.Can not change inside Component.</p>
                    <p>STATE:Can set default values inside Component.Can change inside Component.</p>

                </div>
            </div>
            <div>
                <h3>How does useState work?</h3>
                <p>Usestate work:useState accepts an initial state and returns two values: The current state. A function that updates the state.the current state and a function to update it. The Hook takes an initial state value as an argument and returns an updated state value whenever the setter function is called</p>
            </div>
            <div>
                <h3>Purpose of useEffect other than fetching data?</h3>
                <p>The useEffect Hook allows you to perform side effects in your components. Some examples of side effects are: fetching data, directly updating the DOM, and timers. useEffect accepts two arguments. The second argument is optional.</p>
            </div>
            
        </div>
    );
};

export default Quiz;