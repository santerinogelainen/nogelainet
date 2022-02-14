import React from "react";
import { DataContext } from "../data/dataContext";
import { useSelector } from "react-redux";

/**
 * Add an event listened to a ref that is also cleaned up afterwards
 */
export const useEventListener = (ref, type, callback) => {

    React.useEffect(() => {

        const current = ref.current;

        current.addEventListener(type, callback);

        return () => current.removeEventListener(type, callback);
    });

};

export const useWindowEventListener = (type, callback) => {
    
    React.useEffect(() => {
        window.addEventListener(type, callback);
        return () => window.removeEventListener(type, callback);
    }, [type, callback]);
}

/**
 * Similar to componentDidUpdate, use effect only after the first mount
 */
export const useDidUpdateEffect = (callback, inputs) => {

    const loaded = React.useRef(false);

    React.useEffect(() => {

        if (loaded.current) {
            return callback();
        }

        loaded.current = true;

    }, inputs);

}

/**
 * Similar to componentDidMount, use effect only on the mount
 */
export const useDidMountEffect = (callback, inputs) => {

    const loaded = React.useRef(false);

    React.useEffect(() => {

        if (!loaded.current) {
            return callback();
        }

        loaded.current = true;

    }, inputs);

}

/**
 * Load entities from TableClient to a ref (once)
 */
export const useFetchEntitiesEffect = (getTableClients, entities, setEntities) => {

    React.useEffect(() => {
        if (!entities) {
            fetchAll();
        }
    });

    const fetchAll = async () => {
        
        const context = new DataContext();
        const clients = getTableClients(context);

        if (clients instanceof Array) {

            const results = [];

            for (const client of clients) {
                results.push(await fetch(client));
            }

            setEntities(results);
        }
        else {
            setEntities(await fetch(clients));
        }
    }

    const fetch = async (client) => {

        const result = [];
        const entities = client.listEntities();
            
        for await (const entity of entities) {
            result.push(entity);
        }
        
        return result;
    }


}

/**
 * Set document title
 */
export const useTitle = (title) => {

    const data = useSelector(x => x.data);

    React.useEffect(() => {
        document.title = title;

        if (data.settings.FirstName && data.settings.LastName) {
            document.title += " | " + data.settings.FirstName + " " + data.settings.LastName;
        }
    }, [title, data.settings.FirstName, data.settings.LastName]);

}

/**
 * Use and cleanup an interval
 */
export const useInterval = (callback, speed, inputs) => {
    React.useEffect(() => {
        const interval = setInterval(callback, speed);
        return () => clearInterval(interval);
    }, inputs);
}