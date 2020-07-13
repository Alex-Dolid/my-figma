// Core
import {
  ChangeEvent,
  CSSProperties,
  MouseEventHandler,
  ReactNode,
} from "react";

export type FillActionType<T> = (
  payload: T
) => {
  type: string;
  payload: T;
};

export type ErrorActionType = (
  payload: string
) => {
  type: string;
  error: true;
  payload: string;
};

export type InputType = {
  id?: string;
  name: string;
  type: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  isDisabled?: boolean;
  placeholder?: string;
  isReadOnly?: boolean;
};

export type ReactElementDefaultType = {
  style?: CSSProperties;
  className?: string;
  children?: ReactNode;
  onClick?: MouseEventHandler;
};
