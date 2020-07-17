// Core
import React, {ChangeEvent, FC, ReactElement} from "react";
// Styles
import "./index.scss";
import Button from "../../reusable/Button";
import Icon from "../../reusable/Icon";
import InputGroup from "../../reusable/InputGroup";
import InputColorPicker from "../../reusable/InputColorPicker";
import Input from "../../reusable/Input";

type PropsTypes = {
  coords: ClientRect;
  closePortal: () => void;
};

const arrLetters = ["X", "Blur", "Y"];

const onChange = (e: ChangeEvent): void => {};

const ShadowModal: FC<PropsTypes> = ({
  coords,
  closePortal
}: PropsTypes): ReactElement => {
  return (
    <div
      className="shadow-modal"
      style={{ top: coords.top - 170, left: coords.left - 290 }}
    >
      <div className="shadow-modal__top">
        <span className="shadow-modal__title">Drop Shadow</span>
        <Button type="button" className="shadow-modal__button">
          <Icon name="iconWaterdrop" />
        </Button>
        <Button type="button" className="shadow-modal__button shadow-modal__button_close" onClick={closePortal}>
          <Icon name="iconPlus" />
        </Button>
      </div>
      <div className="shadow-modal__body">
        {arrLetters.map((letter) => (
          <InputGroup
            key={letter}
            id={`${letter}-group`}
            type="string"
            value="100"
            onChange={onChange}
            isLabel
            label={letter}
          />
        ))}
        <div className="shadow-modal__color-input-group">
          <InputColorPicker />
          <Input
            id="shadow-modal-input"
            className="shadow-modal__input"
            type="text"
            onChange={() => {}}
            value="100%"
          />
        </div>
      </div>
    </div>
  );
};

export default ShadowModal;
