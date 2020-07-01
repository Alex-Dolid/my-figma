// Core
import React, { memo, useMemo, FC } from "react";
// Assets
import { ReactComponent as IconAlignPositionBottom } from "../../../assets/icons/alignPositionIcons/align-bottom.svg";
import { ReactComponent as IconAlignPositionHorizontalCenters } from "../../../assets/icons/alignPositionIcons/align-horizontal-centers.svg";
import { ReactComponent as IconAlignPositionLeft } from "../../../assets/icons/alignPositionIcons/align-left.svg";
import { ReactComponent as IconAlignPositionMoreOptions } from "../../../assets/icons/alignPositionIcons/align-more-options.svg";
import { ReactComponent as IconAlignPositionRight } from "../../../assets/icons/alignPositionIcons/align-right.svg";
import { ReactComponent as IconAlignPositionTop } from "../../../assets/icons/alignPositionIcons/align-top.svg";
import { ReactComponent as IconAlignPositionVerticalCenters } from "../../../assets/icons/alignPositionIcons/align-vertical-centers.svg";

export type IconName =
  | "iconAlignPositionBottom"
  | "iconAlignPositionHorizontalCenters"
  | "iconAlignPositionLeft"
  | "iconAlignPositionMoreOptions"
  | "iconAlignPositionRight"
  | "iconAlignPositionTop"
  | "iconAlignPositionVerticalCenters";

type TIcons = { [key in IconName]: FC };

const icons: TIcons = {
  iconAlignPositionBottom: IconAlignPositionBottom,
  iconAlignPositionHorizontalCenters: IconAlignPositionHorizontalCenters,
  iconAlignPositionLeft: IconAlignPositionLeft,
  iconAlignPositionMoreOptions: IconAlignPositionMoreOptions,
  iconAlignPositionRight: IconAlignPositionRight,
  iconAlignPositionTop: IconAlignPositionTop,
  iconAlignPositionVerticalCenters: IconAlignPositionVerticalCenters,
};

interface IIconProps {
  name: IconName;
}

const Icon: FC<IIconProps> = ({ name, ...props }) => {
  const IconElement = useMemo(() => icons[name], [name]);

  if (!IconElement) {
    console.warn(`Icon "${name}" does not exist.`);
    return null;
  }

  return <IconElement {...props} />;
};

export default memo(Icon);
