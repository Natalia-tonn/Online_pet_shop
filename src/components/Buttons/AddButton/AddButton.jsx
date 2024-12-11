import React from "react";
import { useState } from "react";
import styles from "./AddButton.module.css"

function AddButton({  onClick }) {
    const [state, setState] = useState ("normal")

    const handleClick = (e) => {
        setState ("added")
        if (onClick) {
            onClick(e)
        }
        setTimeout(() => setState("normal"), 3000)
    }


    return(
        <button
      className={`${styles.addButton} ${state === 'added' ? styles.addedState : ''}`}
      onClick={handleClick}
    >
      {state === 'added' ? 'Added' : 'Add to cart'}
    </button>
    )
}
export default AddButton
