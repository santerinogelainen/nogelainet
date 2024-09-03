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
  reducers: {},
});

function createDictionary<T>(
  array: Array<T>,
  key: (item: T) => string,
  value?: (item: any) => any,
): Record<string, T> {
  const results = {};

  for (const item of array) {
    results[key(item)] = value ? value(item) : item;
  }

  return results;
}

function getCommands() {
  const dict = createDictionary(commands, (x) => x.name);

  for (const color of cssColors) {
    if (!dict[color]) {
      dict[color] = {
        key: `css-${color}`,
        name: color,
        type: Commands.CssColor,
      };
    }
  }

  return dict;
}

export const settingActions = slice.actions;
export default slice;
