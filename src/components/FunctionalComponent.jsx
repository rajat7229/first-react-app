import React, {useState} from "react";

const FunctionalComponent = (props) => {

    const [count, setCount] = useState(0);
    const [changeName, setChangeName] = useState("");

    return(
        <div>
            <p>This is Functional Component</p>
            <button onClick={() => setCount(count + 1)}>Click me to Add 1</button>
            <button onClick={() => setCount(count - 1)}>Click me to Subtract 1</button>
            <h1>{count}</h1>
            <p>Above line is using state(usestate)</p>
            <h1>My name is {props.name}, I am {props.age}, I work for {props.company}</h1>
            <p>Above line is using props</p>
            <input onChange={(e) => setChangeName(e.target.value)} />
            <button onClick={() => props.setName(changeName)}>Change name</button>
            <p>Above line is using both props and states</p>
        </div>
    )
}

export default FunctionalComponent;