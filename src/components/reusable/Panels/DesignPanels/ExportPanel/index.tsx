// Core
import React, { ReactElement } from "react";
// Styles
import "./index.scss";
// Components
import Panel from "../../Panel/Panel";
import Select from "../../../Select";
import Input from "../../../Input";
import Icon from "../../../Icon";
import Button from "../../../Button";

const ExportPanel = (): ReactElement => {
  return (
    <Panel
      className="fill-panel"
      title="Export"
      isWrapperBody
      topButtons={["iconMinus", "iconPlus"]}
    >
      <Select
        options={[
          { value: "1", label: "1x" },
          { value: "2", label: "2x" },
        ]}
        onChange={() => {}}
        value="1"
        className="stroke-panel__select mt"
      />
      <Input
        id="stroke-panel-input-width"
        className="stroke-panel__input"
        type="text"
        onChange={() => {}}
        placeholder="Suffix"
      />
      <Select
        options={[
          { value: "png", label: "PNG" },
          { value: "svg", label: "SVG" },
        ]}
        onChange={() => {}}
        value="png"
        className="stroke-panel__select mt"
      />
      <Button type="button" className="stroke-panel__button mt">
        <Icon name="iconThreeDots" />
      </Button>
      <Button type="button" className="stroke-panel__button mt">
        Export image 1
      </Button>
    </Panel>
  );
};

export default ExportPanel;
