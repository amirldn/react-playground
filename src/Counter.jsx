import React, {useState} from 'react';

// Usual way of creating react function it
// function Counter() {
//     return None;
// }

// But we can do arrow function instead
const Counter = () => {
    // so this is all JS
    // useState is a hook, will dynamically & automatically update what is displayed on the page


    // METHOD 1: Doing with normal JS, but does not update the page
    // firstly make our initial variable
    // let count = 0
    // then create a function which will handle incrememting
    // const handleIncrement = () => {
    //     count++;
    // }
    // button in the return does this  <button onClick={handleIncrement}>Increment</button> 
    //  so this works but the page does not update cuz react only updates for specific things

    // METHOD 2: React 
    // const [count, setCount] = React.useState(0);  -- also works, but is not clean, we can import useState from react at the top

    const[count, setCount] = useState(0);

    // ^ what useState hook does is we get 2 things back, the actual variable we want to use (count) that stores value
    // we also get back a function which we can use to set the value of the count (our var)
    // We passed in 0 as our default value
    // Now we make use of the setCount

    // const handleIncrement = () => {
    //     setCount(count+1);
    // }
    // const handleDecrement = () => {
    //     setCount(count-1);
    // }
    // so whenever setCount is called, it is part of a hook which knows to update the DOM so it is done for us
    // these functions were used before, but we just put them straight into the buttons


    // in the return section, that is JSX
    // that we want to return that gets displayed on the page
    return(
        // <div>
        <React.Fragment> 
            {/* react fragment is the same as a toplevel div, but with no styling since it is not a div, its an alternative container */}
            <h2>Count: {count}</h2>
            {/* <button onClick={handleIncrement}>Increase</button> 
            <button onClick={handleDecrement}>Decrease</button> 
            kind of effort to this, we can just put the function straight in*/}

             {/* <button onClick={setCount(count+1)}>Increase</button> 
             <button onClick={setCount(count-1)}>Decrease</button>  
             now this doesnt work because, we are essentially calling the setCount function inside {} over and over again - infinite loop
             runs on render, instead of on click, which then incremeents count so it re renders, then it calls button again etc etc inf loop*/}

             <button onClick={() => setCount(count+1)}>Increase</button>
             <button onClick={() => setCount(count-1)}>Decrease</button>
             {/* using this function way instead, it calls an empty function which immediately references the function after the => so only performed on click */}

        </React.Fragment>
        // </div>
)


}

// We need to export
export default Counter