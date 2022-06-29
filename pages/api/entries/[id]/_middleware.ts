import { NextFetchEvent, NextRequest, NextResponse } from "next/server";
import mongoose, { StringExpressionOperatorReturningBoolean } from 'mongoose'

export function middleware (req: NextRequest, ev: NextFetchEvent) {

    const id = req.page.params?.id || ''

    const checkMongoIDRegExp = new RegExp('^[0-9a-fA-F]{24}$') 

    if (!checkMongoIDRegExp.test(id as string)) {
        // return res.status(400).json({messaje: 'El id no es valido'})
        return new Response(JSON.stringify({message: 'El id no es valido'}), {
            status: 400,
            headers: {
                'Content-Type':'application/json'
            }
        })
    }

    return NextResponse.next()
}