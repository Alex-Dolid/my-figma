// Core
import React, { FC } from "react";
// Redux
import { Provider } from "react-redux";
import { store } from "../../init/store";
// Components
import EditorLeftSideBar from "./EditorLeftSidebar";
import EditorTopBar from "./EditorTopbar";
import EditorRightSideBar from "./EditorRightSidebar";

const Main: FC = () => (
  <Provider store={store}>
    <EditorLeftSideBar />
    <EditorTopBar />
    <EditorRightSideBar />
  </Provider>
);

export default Main;
