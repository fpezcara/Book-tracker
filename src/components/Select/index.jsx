import React from "react";

const Select = ({ selectValue, optionValue, onChangeHandler, dataTestId }) => (
  <select
    value={selectValue.toLowerCase()}
    onChange={onChangeHandler}
    data-testid={dataTestId}
  >
    {optionValue &&
      optionValue.map((optionAvailable, i) => (
        <option key={i} value={optionAvailable}>
          {optionAvailable}
        </option>
      ))}
  </select>
);

export default Select;
