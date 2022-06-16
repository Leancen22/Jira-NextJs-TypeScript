import {FC, useReducer} from 'react'
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
            description: 'Proident dolor duis elit sunt qui dolor laborum veniam ea lavoris qui cosequat',
            status: 'in-progress',
            createdAt: Date.now(),
        },
        {
            _id: uuidv4(),
            description: 'Proident dolor duis elit sunt qui dolor laborum veniam ea lavoris qui cosequat',
            status: 'in-progress',
            createdAt: Date.now(),
        },
        {
            _id: uuidv4(),
            description: 'Proident dolor duis elit sunt qui dolor laborum veniam ea lavoris qui cosequat',
            status: 'in-progress',
            createdAt: Date.now(),
        }
    ],
}

export const EntriesProvider:FC = ({children}) => {
    
    const [state, dispatch] = useReducer(entriesReducer, Entries_INITIAL_STATE)

    return (
        <EntriesContext.Provider
            value={{
                ...state,
                entries: []
            }}
        >
            {children}
        </EntriesContext.Provider>
    )
}