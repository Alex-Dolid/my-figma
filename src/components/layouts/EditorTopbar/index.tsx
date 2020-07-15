// Core
import React, { FC } from "react";
// Styles
import "./index.scss";
// Components
import Icon, { IconName } from "../../reusable/Icon";
import Button from "../../reusable/Button";
import Select from "../../reusable/Select";

const arrNameIcons: Array<IconName> = [
  "iconBurger",
  "iconCursorDefault",
  "iconRectangle",
  "iconPencil",
  "iconText",
  "iconComments",
];

const EditorTopBar: FC = () => (
  <div className="editor-top-bar">
    {
      arrNameIcons.map((iconName) => {
        if (iconName === "iconBurger" || iconName === "iconComments") {
          return (
            <Button key={iconName} type="button" className="editor-top-bar__button">
              <Icon name={iconName}/>
            </Button>
          );
        } else {
          return (
            <Select
              key={iconName}
              options={arrNameIcons.map((_iconName) => ({
                value: _iconName,
                label: <Icon name={_iconName}/>
              }))}
              onChange={() => {}}
              value={iconName}
              className="editor-top-bar__select"
            />
          );
        }
      })
    }
  </div>
);

export default EditorTopBar;
