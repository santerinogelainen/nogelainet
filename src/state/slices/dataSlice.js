import { createSlice } from "@reduxjs/toolkit";
import { DataContext } from "../../data/dataContext";
import { Commands } from "../../models/commands";
import { cssColors } from "../../utils/cssColors";

const initialState = {
  commands: {},
  settings: {},
  images: [],
  projects: [],
  employers: [],
  socials: [],
};

const slice = createSlice({
  name: "data",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState: initialState,
  reducers: {
    set: (state, action) => {
      return action.payload || initialState;
    },
  },
});

export async function fetchData(dispatch) {
  const context = new DataContext();

  const data = {
    commands: await fetchCommands(context.commands),
    settings: await fetchDictionary(
      context.settings,
      (x) => x.rowKey,
      (x) => x.Value
    ),
    images: await fetchArray(context.images, (x) => x.Url),
    projects: await fetchArray(context.projects),
    //employers: await fetchArray(context.employers),
    socials: await fetchArray(context.socials),
  };

  dispatch(slice.actions.set(data));
}

async function fetchDictionary(client, key, value) {
  const results = {};
  const entities = client.listEntities();

  for await (const entity of entities) {
    results[key(entity)] = value ? value(entity) : entity;
  }

  return results;
}

async function fetchArray(client, value) {
  const results = [];
  const entities = client.listEntities();

  for await (const entity of entities) {
    results.push(value ? value(entity) : entity);
  }

  return results;
}

async function fetchCommands(client) {
  const commands = await fetchDictionary(client, (x) => x.Name);

  console.log(commands);
  for (const color of cssColors) {
    if (!commands[color]) {
      commands[color] = {
        Alias: true,
        Name: color,
        Type: Commands.CssColor
      };
    }
  }

  return commands;
}

export const settingActions = slice.actions;
export default slice;
