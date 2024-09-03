import { createSlice } from "@reduxjs/toolkit";
import { Commands } from "../../models/commands";
import cssColors from "../../data/cssColors";
import commands from "../../data/commands";
import projects from "../../data/projects";
import socialMedia from "../../data/socialMedia";

const initialState = {
  commands: getCommands(),
  projects,
  socials: socialMedia,
};

const slice = createSlice({
  name: "data",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState: initialState,
  reducers: {}
});

function createDictionary(array, key, value?: (item: any) => any) {
  const results = {};

  for (const item of array) {
    results[key(item)] = value ? value(item) : item;
  }

  return results;
}

function getCommands() {
  const dict = createDictionary(commands, (x) => x.Name);

  for (const color of cssColors) {
    if (!dict[color]) {
      dict[color] = {
        Alias: true,
        Name: color,
        Type: Commands.CssColor,
      };
    }
  }

  return dict;
}

export const settingActions = slice.actions;
export default slice;
