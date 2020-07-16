// Core
import React, { FC, ReactElement } from "react";
// Styles
import "./index.scss";
import Button from "../../reusable/Button";
import Icon from "../../reusable/Icon";

type PropsTypes = {
  coords: ClientRect;
  closePortal: () => void;
};

const ShadowModal: FC<PropsTypes> = ({
  coords,
  closePortal
}: PropsTypes): ReactElement => {
  return (
    <div
      className="shadow-modal"
      style={{ top: coords.top - 70, left: coords.left - 280 }}
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
        . // TODO макет тут і в стилях
      </div>
    </div>
  );
};

export default ShadowModal;
