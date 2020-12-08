import React, { useState } from "react"

const InputField = (props) => {
    // console.log(props, "props in InputField")
    let [inputValue, setInputValue] = useState("");




    const handleChange = (event) => {
        // event.preventDefault();

        setInputValue(event.target.value);
    };

    // const handleOnClick = () => {

    //     console.log(inputValue )



    return (
        <div>
            <form onSubmit={props.onAddGrocery}>
                <input
                    required
                    onChange={handleChange}
                    type="text"
                    value={inputValue}>
                </input>
                <button
                    onClick={props.onAddGrocery}
                    type="submit"
                    name="button"
                    value={inputValue}
                >
                    Voeg toe
                </button>
            </form>
        </div>
    )
}

export default InputField