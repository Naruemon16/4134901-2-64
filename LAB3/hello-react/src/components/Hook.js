import React,{ useState, useEffect } from "react";

function Hook() {
    const [color, setColor] = useState("red");
    const [count, setCount] = useState(0);  
    const [multi, setMulti] = useState(1); 
    const[Car, setCar] = useState({
        brand: "Mazda",
        year: 2012,
        color: "red",
    });

    const updateCarColor = () => {
        setCar((previousState) => {
            return {...previousState,color:"green"};
        });
    };

    useEffect(() => {
        document.title = `change Stage ${count} : ${color}`;
        //setTimeout(() => {
            setMulti(() => count *2);
       // }, 1000);
        
    }, [count]);

    return( 
    <>
        <p>Color is {color}</p>
        <button onClick={() => setColor("blue")}>Change</button>

        <p>Count is {count}</p>
        <p>mulit of count is {multi}</p>
        <button onClick={() => setCount(count + 1)}>Inc</button>

        <p>
            {Car.brand}Car is {Car.color}
        </p>
        <button onClick={updateCarColor}>Color</button>
        </>   
    );
}

export default Hook;