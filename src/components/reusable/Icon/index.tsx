// Core
import React, { memo, useMemo, FC, CSSProperties } from "react";
// Assets
// Commons
import { ReactComponent as IconAccordionArrow } from "../../../assets/icons/accordion-arrow-icon.svg";
import { ReactComponent as IconEye } from "../../../assets/icons/eye-icon.svg";
import { ReactComponent as IconPlus } from "../../../assets/icons/plus-icon.svg";
import { ReactComponent as IconMinus } from "../../../assets/icons/minus-icon.svg";
import { ReactComponent as IconBurger } from "../../../assets/icons/burger-icon.svg";
import { ReactComponent as IconThreeDots } from "../../../assets/icons/three-dots-icon.svg";
// AlignPositionsIcons
import { ReactComponent as IconAlignPositionBottom } from "../../../assets/icons/alignPositionIcons/align-bottom.svg";
import { ReactComponent as IconAlignPositionHorizontalCenters } from "../../../assets/icons/alignPositionIcons/align-horizontal-centers.svg";
import { ReactComponent as IconAlignPositionLeft } from "../../../assets/icons/alignPositionIcons/align-left.svg";
import { ReactComponent as IconAlignPositionMoreOptions } from "../../../assets/icons/alignPositionIcons/align-more-options.svg";
import { ReactComponent as IconAlignPositionRight } from "../../../assets/icons/alignPositionIcons/align-right.svg";
import { ReactComponent as IconAlignPositionTop } from "../../../assets/icons/alignPositionIcons/align-top.svg";
import { ReactComponent as IconAlignPositionVerticalCenters } from "../../../assets/icons/alignPositionIcons/align-vertical-centers.svg";
// PositionGroupIcons
import { ReactComponent as IconRotate } from "../../../assets/icons/rotate-icon.svg";
import { ReactComponent as IconBorderRadius } from "../../../assets/icons/border-radius-icon.svg";
// ConstraintsIcons
import { ReactComponent as IconConstraints } from "../../../assets/icons/constraintsIcons/constraints-icon.svg";
import { ReactComponent as IconReverseArrowHorizontal } from "../../../assets/icons/constraintsIcons/reverse-arrow-horisontal-icon.svg";
import { ReactComponent as IconReverseArrowVertical } from "../../../assets/icons/constraintsIcons/reverse-arrow-vertical-icon.svg";
// LayersIcons
import { ReactComponent as IconWaterdrop } from "../../../assets/icons/layersIcons/waterdrop-icon.svg";
// ControlsIcon
import { ReactComponent as IconCursorDefault } from "../../../assets/icons/controlsIcons/cursor-default-icon.svg";
import { ReactComponent as IconRectangle } from "../../../assets/icons/controlsIcons/rectangle-icon.svg";
import { ReactComponent as IconPencil } from "../../../assets/icons/controlsIcons/pencil-icon.svg";
import { ReactComponent as IconText } from "../../../assets/icons/controlsIcons/text-icon.svg";
import { ReactComponent as IconComments } from "../../../assets/icons/controlsIcons/comments-icon.svg";
// StrokeIcons
import { ReactComponent as IconWidthStroke } from "../../../assets/icons/strokeIcons/width-stroke-icon.svg";
// EffectsIcons
import { ReactComponent as IconSun } from "../../../assets/icons/effectsIcons/sun-icon.svg";

export type IconName =
  | "iconAlignPositionBottom"
  | "iconAlignPositionHorizontalCenters"
  | "iconAlignPositionLeft"
  | "iconAlignPositionMoreOptions"
  | "iconAlignPositionRight"
  | "iconAlignPositionTop"
  | "iconAlignPositionVerticalCenters"
  | "iconRotate"
  | "iconBorderRadius"
  | "iconConstraints"
  | "iconReverseArrowHorizontal"
  | "iconReverseArrowVertical"
  | "iconAccordionArrow"
  | "iconWaterdrop"
  | "iconEye"
  | "iconPlus"
  | "iconMinus"
  | "iconBurger"
  | "iconCursorDefault"
  | "iconRectangle"
  | "iconPencil"
  | "iconText"
  | "iconComments"
  | "iconWidthStroke"
  | "iconThreeDots"
  | "iconSun";

type TIcons = { [key in IconName]: FC };

const icons: TIcons = {
  // Commons
  iconAccordionArrow: IconAccordionArrow,
  iconEye: IconEye,
  iconPlus: IconPlus,
  iconMinus: IconMinus,
  iconBurger: IconBurger,
  iconThreeDots: IconThreeDots,
  // AlignPositionIcons
  iconAlignPositionBottom: IconAlignPositionBottom,
  iconAlignPositionHorizontalCenters: IconAlignPositionHorizontalCenters,
  iconAlignPositionLeft: IconAlignPositionLeft,
  iconAlignPositionMoreOptions: IconAlignPositionMoreOptions,
  iconAlignPositionRight: IconAlignPositionRight,
  iconAlignPositionTop: IconAlignPositionTop,
  iconAlignPositionVerticalCenters: IconAlignPositionVerticalCenters,
  // PositionGroupIcons
  iconRotate: IconRotate,
  iconBorderRadius: IconBorderRadius,
  // ConstraintsIcons
  iconConstraints: IconConstraints,
  iconReverseArrowHorizontal: IconReverseArrowHorizontal,
  iconReverseArrowVertical: IconReverseArrowVertical,
  // LayersIcons
  iconWaterdrop: IconWaterdrop,
  // ControlsIcons
  iconComments: IconComments,
  iconCursorDefault: IconCursorDefault,
  iconPencil: IconPencil,
  iconRectangle: IconRectangle,
  iconText: IconText,
  // StrokeIcons
  iconWidthStroke: IconWidthStroke,
  // EffectsIcons
  iconSun: IconSun,
};

interface IIconProps {
  name: IconName;
  className?: string;
  width?: string;
  height?: string;
  style?: CSSProperties;
}

const Icon: FC<IIconProps> = ({ name, ...props }: IIconProps) => {
  const IconElement = useMemo(() => icons[name], [name]);

  if (!IconElement) {
    console.warn(`Icon "${name}" does not exist.`);
    return null;
  }
  // TODO
  // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
  // @ts-ignore
  return <IconElement {...props} />;
};

export default memo(Icon);
