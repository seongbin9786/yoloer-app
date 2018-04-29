import React, { Component } from "react";
import { StyleSheet, ScrollView, View } from "react-native";

import CenterView from "../../utils/CenterView";
import PaddingView from "../../utils/PaddingView";

const SceneDefaultLayout = props => (
  <ScrollView>
    <CenterView>
      <PaddingView padding={5} />
      {props.children}
    </CenterView>
  </ScrollView>
);

export default SceneDefaultLayout;
