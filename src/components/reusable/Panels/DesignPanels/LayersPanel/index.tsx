// Core
import React, { ReactElement } from "react";
// Styles
import "./index.scss";
// Components
import Select from "../../../Select";
import Panel from "../../Panel/Panel";
import Input from "../../../Input";
import Icon from "../../../Icon";
import Button from "../../../Button";

const LayersPanel = (): ReactElement => {
  return (
    <Panel className="layers-panel" title="Layers" isWrapperBody>
      <Select
        options={[{value: "left", label: "left"}, {value: "right", label: "right"}]}
        onChange={() => {
        }}
        isMarkerLeft
        iconNameLeft="iconWaterdrop"
        value="left"
        className="layers-panel__select"
      />
      <Input
        id="layers-panel-input"
        className="layers-panel__input"
        type="text"
        onChange={() => {}}
        value="100%"
      />
      <Button type="button" className="layers-panel__button">
        <Icon name="iconEye" />
      </Button>
    </Panel>
  );
};

export default LayersPanel;
