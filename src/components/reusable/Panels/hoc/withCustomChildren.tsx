// Core
import React, { ComponentType, FC } from "react";

export const withCustomChildren = <P extends object>(
  Panel: ComponentType
): FC<P> => ({ ...props }) => <Panel {...(props as P)} />;
