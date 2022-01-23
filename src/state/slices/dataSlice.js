import { createSlice } from '@reduxjs/toolkit'
import { DataContext } from '../../data/dataContext';

const slice = createSlice({
    name: 'data',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState: {
        commands: {},
        settings: {},
        images: [],
        projects: [],
        employers: [],
        socials: []
    },
    reducers: {
        set: (state, action) => {
            return action.payload;
        }
    },
});

export async function fetchData(dispatch) {

    const context = new DataContext();

    const data = {
        commands: await fetchDictionary(context.commands, x => x.Name),
        settings: await fetchDictionary(context.settings, x => x.Key, x => x.Value),
        images: await fetchArray(context.images, x => x.Url),
        projects: await fetchArray(context.projects),
        //employers: await fetchArray(context.employers),
        socials: await fetchArray(context.socials)
    }

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

export const settingActions = slice.actions;
export default slice;