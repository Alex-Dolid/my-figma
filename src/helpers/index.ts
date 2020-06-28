import React, { ReactElement, ReactNode } from "react";
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const isEmptyArray = (array: any): boolean =>
  !Array.isArray(array) || !array.length;

export const isEmptyObj = (obj: object | Array<unknown>): boolean => {
  if (obj && obj.constructor === Object) {
    for (const key in obj) {
      return false;
    }
    return true;
  }
  return true;
};

export const getUniqueKey = (enteredValue?: unknown): string => {
  switch (typeof enteredValue) {
    case "number":
      return (enteredValue * Math.random()).toString();
    case "string":
      return enteredValue + Math.random();
    default:
      return Math.random().toString();
  }
};

export const remadeChildrenHandler = (
  children: ReactElement,
  newProps: object
): ReactNode => {
  return React.Children.map(children, (child) => {
    if (child) {
      return React.cloneElement(child, {
        ...newProps,
      });
    }
  });
};
