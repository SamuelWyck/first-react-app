import { useState } from "react";


function Person() {
    const [person, setPerson] = useState({ first: "we", last: "we", age: 0 });
  
    const handleIncreaseAge = () => {
        console.log("in handleIncreaseAge (before setPerson call): ", person);
        setPerson({ ...person, age: person.age + 1 });
        console.log("in handleIncreaseAge (after setPerson call): ", person);
    };

    function handleChange(event) {
        if (event.target.id === "last") {
            setPerson({...person, last: event.target.value});
        } else {
            setPerson({...person, first: event.target.value});
        }
    };
  
  
    return (
        <>  
            <div>
                <label htmlFor="first">First </label>
                <input type="text" id="first" onChange={handleChange} value={person.first}/>
            </div>
            <div>
                <label htmlFor="last">Last </label>
                <input type="text" id="last" onChange={handleChange}  value={person.last}/>
            </div>
            <h1>{person.first} {person.last}</h1>
            <h2>{person.age}</h2>
            <button onClick={handleIncreaseAge}>Increase age</button>
        </>
    );
};


export default Person;
  