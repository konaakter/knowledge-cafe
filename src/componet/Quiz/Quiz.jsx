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
               <p>DOM update: React updates the real DOM to reflect the changes in the virtual DOM. The updated elements are then visible to the user. <br/>

                Event handling: When the user interacts with the UI, React handles the events and updates the state of the components. This triggers a re-rendering of the affected components, which in turn updates the virtual DOM and the real DOM.</p> 
                
            </div>
            
        </div>
    );
};

export default Quiz;