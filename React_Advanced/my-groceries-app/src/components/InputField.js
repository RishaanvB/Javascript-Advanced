import React, { useState } from "react"

const InputField = (props) => {
    // console.log(props, "props in InputField")
    let [inputValue, setInputValue] = useState("");




    const handleChange = (event) => {
        // event.preventDefault();
        console.log(event.target)
        setInputValue(event.target.value);
    };

    // const handleOnClick = () => {

    //     console.log(inputValue )




    return (
        <div>
            <input
                required
                onChange={handleChange}
                type="text"
                value={inputValue}>
            </input>
            <button
                onClick={props.onAddGrocery}

                name="button"
                value={inputValue}
            >
                Voeg toe
                </button>
        </div>

    )
}

export default InputField