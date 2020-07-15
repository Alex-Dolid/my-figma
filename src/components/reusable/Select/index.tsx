// Core
import React, {
  FC,
  ReactElement, ReactNode,
  useCallback,
  useMemo,
  useRef,
  useState,
} from "react";
// Libs
import classNames from "classnames";
// Styles
import "./index.scss";
// Components
import Icon, { IconName } from "../Icon";
import Option from "./Option";
// Hooks
import useOnClickOutside from "../../../hooks/useOnClickOutside";

type OptionObjType = {
  value: string;
  label: string | ReactNode;
};

type PropsTypes = {
  value?: string;
  placeholder?: string;
  options: OptionObjType[];
  onChange: (value: string) => void;
  iconNameRight?: IconName;
  isMarkerLeft?: boolean;
  iconNameLeft?: IconName;
  className?: string;
};

const Select: FC<PropsTypes> = ({
  options,
  value,
  placeholder = "",
  onChange,
  iconNameRight = "iconAccordionArrow",
  isMarkerLeft = false,
  iconNameLeft = "iconAccordionArrow",
  className = "",
}: PropsTypes): ReactElement => {
  const selectedOption = useMemo(
    () => options.find((option) => option.value === value),
    [options, value]
  );
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef(null);

  useOnClickOutside(selectRef, () => setIsOpen(false));

  const toggleIsOpen = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen]);

  const handleClickOption = useCallback(
    (_value) => {
      toggleIsOpen();
      onChange(_value);
    },
    [toggleIsOpen, onChange]
  );

  return (
    <div className={`select ${className}`} ref={selectRef}>
      <div className="select__top" onClick={toggleIsOpen}>
        {isMarkerLeft ? (
          <Icon
            className="select__marker"
            name={iconNameLeft}
            style={{
              order: -1,
              minWidth: 7,
              minHeight: 9,
              marginRight:
                iconNameLeft === "iconReverseArrowVertical" ? 20 : 15,
              marginLeft: iconNameLeft === "iconReverseArrowVertical" ? 3 : 0,
            }}
          />
        ) : null}
        <div className="select__value">
          {selectedOption ? selectedOption.label : placeholder}
        </div>
        <Icon
          className={classNames("select__marker", {
            select__marker_inverted: isOpen,
          })}
          name={iconNameRight}
          style={{ minWidth: 15 }}
        />
      </div>
      {isOpen && (
        <div className="select__bottom">
          <div className="select__options">
            {options.map((option) => (
              <React.Fragment key={option.value}>
                <Option
                  selected={selectedOption?.value === option.value}
                  onClick={handleClickOption}
                  value={option.value}
                >
                  {option.label}
                </Option>
              </React.Fragment>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Select;
