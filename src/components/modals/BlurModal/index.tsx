// Core
import React, {ChangeEvent, FC, ReactElement} from "react";
// Styles
import "./index.scss";
import Button from "../../reusable/Button";
import Icon from "../../reusable/Icon";
import InputGroup from "../../reusable/InputGroup";

type PropsTypes = {
  coords: ClientRect;
  closePortal: () => void;
};

const arrLetters = ["Blur"];

const onChange = (e: ChangeEvent): void => {};

const BlurModal: FC<PropsTypes> = ({
  coords,
  closePortal
}: PropsTypes): ReactElement => {
  return (
    <div
      className="blur-modal"
      style={{ top: coords.top - 90, left: coords.left - 290 }}
    >
      <div className="blur-modal__top">
        <span className="blur-modal__title">Layer Blur</span>
        <Button type="button" className="blur-modal__button blur-modal__button_close" onClick={closePortal}>
          <Icon name="iconPlus" />
        </Button>
      </div>
      <div className="blur-modal__body">
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
      </div>
    </div>
  );
};

export default BlurModal;
