import type { NextApiRequest, NextApiResponse } from "next";
import {db} from '../../../../database'
import {Entry, IEntry} from '../../../../models'

type Data = 
| { messaje: string }
| IEntry

export default function handler (req: NextApiRequest, res: NextApiResponse<Data>) {
    
    // const {id} = req.query

    // if (!mongoose.isValidObjectId(id)) {
    //     return res.status(400).json({messaje: 'El id no es valido'})
    // }

    switch(req.method) {
        case 'PUT':
            return updateEntry(req, res);
        case 'GET':
            return getEntry(req, res);
        default:
            return res.status(400).json({messaje: 'El metodo no es valido'})
    }
}

const getEntry = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
    
    const {id} = req.query

    await db.connect()

    const entryInDB = await Entry.findById(id)

    await db.disconnect()


    if (!entryInDB) {
        await db.disconnect()
        return res.status(400).json({messaje: 'La id no es valido'})
    }

    return res.status(200).json(entryInDB)
}

const updateEntry = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
    
    const {id} = req.query

    await db.connect()

    const entryToUpdate = await Entry.findById(id)

    if (!entryToUpdate) {
        await db.disconnect()
        return res.status(400).json({messaje: 'La id no es valido'})
    }   

    const {
        description = entryToUpdate.description,
        status = entryToUpdate.status
    } = req.body

    try {
        const updatedEntry = await Entry.findByIdAndUpdate(id, {description, status}, {runValidators: true, new: true})

        await db.disconnect()

        res.status(200).json(updatedEntry!)

    } catch (error) {
        await db.disconnect()
        res.status(400).json({messaje: 'Bad request'})
    }


}