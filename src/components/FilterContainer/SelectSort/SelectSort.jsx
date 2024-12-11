import React, { useState } from "react";
import { useRef } from "react";
import arrowIcon from "../../../assets/icons/arrow.svg"
import styles from "./SelectSort.module.css"


const SelectSort = ({ sortType, setSortType, searchParams, setSearchParams}) => {
    const [isOpen, setIsOPen] = useState(false)
    const selectRef = useRef(null)

const options = [
    { value: "default", label: "by default"},
    { value: "newest", label: "newest"},
    { value: "priceHighToLow", label: "price: high-low"},
    { value: "priceLowToHigh", label: "price: low-high"}
];


const handleToggle = () => {
    setIsOPen(!isOpen)
}
const handleSelectChange = (newValue) => {
    setSortType(newValue);
    const newSearchParams = new URLSearchParams(searchParams)
    newSearchParams.set("sortType", newValue)
    setSearchParams(newSearchParams)
    setIsOPen(false)
};





return (
    <div className={styles.customSelectContainer} ref={selectRef}>
      <label className={styles.sortType} tabIndex="0">
        <div
          className={`${styles.customSelectHeader} ${isOpen ? styles.open : ''}`}
          onClick={handleToggle}
        >
          <span>
            {options.find(option => option.value === sortType)?.label || 'Select an option'}
          </span>
          <img
            src={arrowIcon}
            alt="Arrow"
            className={`${styles.arrow} ${isOpen ? styles.arrowOpen : ''}`}
          />
        </div>
        {isOpen && (
          <div className={styles.customSelectOptions}>
            {options.map(option => (
              <div
                key={option.value}
                className={`${styles.customSelectOption} ${sortType === option.value ? styles.selected : ''}`}
                onClick={() => handleSelectChange(option.value)}
              >
                {option.label}
              </div>
            ))}
          </div>
        )}
      </label>
    </div>
  );
};

export default SelectSort;
