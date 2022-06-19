import {FC, PropsWithChildren, useReducer} from 'react'
import { Entry } from '../../interfaces';
import { EntriesContext, entriesReducer } from './'
import {v4 as uuidv4} from 'uuid'

export interface EntriesState {
    entries: Entry[];
}

const Entries_INITIAL_STATE: EntriesState = {
    entries: [
        {
            _id: uuidv4(),
            description: 'pending : Proident dolor duis elit sunt qui dolor laborum veniam ea lavoris qui cosequat',
            status: 'pending',
            createdAt: Date.now(),
        },
        {
            _id: uuidv4(),
            description: 'in-progess : dolor duis elit sunt qui dolor laborum veniam ea lavoris qui cosequat',
            status: 'in-progress',
            createdAt: Date.now() - 1000000,
        },
        {
            _id: uuidv4(),
            description: 'finished : Proident dolor duis elit sunt qui dolor laborum veniam ea lavoris qui cosequat',
            status: 'finished',
            createdAt: Date.now() - 100000,
        }
    ],
}

export const EntriesProvider:FC<PropsWithChildren> = ({children}) => {
    
    const [state, dispatch] = useReducer(entriesReducer, Entries_INITIAL_STATE)

    const addNewEntry = ( description: string ) => {
        const newEntry: Entry = {
            _id: uuidv4(),
            description: description,
            createdAt: Date.now(),
            status: 'pending'
        }

        dispatch({ type: '[Entry] Add-Entry', payload: newEntry })
    }

    return (
        <EntriesContext.Provider
            value={{
                ...state,
                addNewEntry,
            }}
        >
            {children}
        </EntriesContext.Provider>
    )
}