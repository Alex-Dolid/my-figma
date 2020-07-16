// Core
import React, { ReactElement, useState, MouseEvent } from "react";
import { PortalWithState } from "react-portal";
// Styles
import "./index.scss";
// Components
import Button from "../../../Button";
import Icon from "../../../Icon";
import Panel from "../../Panel/Panel";
import Select from "../../../Select";
// Modals
import ShadowModal from "../../../../modals/ShadowModal";

const EffectsPanel = (): ReactElement => {

  const [modalCoords, setModalCoords] = useState({
    bottom: 0,
    height: 100,
    left: 0,
    right: 0,
    top: 0,
    width: 100
  });

  return (
    <Panel
      className="effects-panel"
      title="Effects"
      isWrapperBody
      topButtons={["iconPlus"]}
    >

      <PortalWithState closeOnOutsideClick closeOnEsc>
        {({ openPortal, closePortal, portal }): ReactElement => {


          const handleOpenModal = (e: MouseEvent): void => {
            const coords = (e.target as HTMLButtonElement).getBoundingClientRect();
            setModalCoords(coords);
            openPortal(e);
          };

          return (
            <>
              <Button type="button" className="effects-panel__button" onClick={handleOpenModal}>
                <Icon name="iconSun" />
              </Button>
              {portal(
                <ShadowModal coords={modalCoords} closePortal={closePortal}/>
              )}
            </>
          );
        }}
      </PortalWithState>

      <Select
        options={[
          { value: "Drop Shadow", label: "Drop Shadow" },
          { value: "Layer Blur", label: "Layer Blur" },
        ]}
        onChange={() => {}}
        value="Drop Shadow"
        className="effects-panel__select"
      />

      <Button type="button" className="effects-panel__button">
        <Icon name="iconEye" />
      </Button>
      <Button type="button" className="effects-panel__button">
        <Icon name="iconMinus" />
      </Button>

    </Panel>
  );
};

export default EffectsPanel;
