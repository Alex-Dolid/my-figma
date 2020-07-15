// Core
import React, { ReactElement } from "react";
// Styles
import "./index.scss";
// Components
import Input from "../Input";

const InputColorPicker = (): ReactElement => {
  return (
    <div className="input-color-picker">
      <Input
        id="input-color-picker-input-color"
        className="input-color-picker__input input-color-picker__input_color"
        type="color"
        onChange={() => {}}
        value="100%"
      />
      <Input
        id="input-color-picker-input-text"
        className="input-color-picker__input input-color-picker__input_text"
        type="text"
        onChange={() => {}}
        value="aaaaaa"
      />
    </div>
  );
};

export default InputColorPicker;
