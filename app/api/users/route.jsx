import connectMongoDB from "@/config/db";
import User from "@/models/User";
import { NextResponse } from "next/server";


/**
 * get data from mongoDB
 * also get single data
 * @returns api/users
 */
export async function GET(request){
    const {searchParams} = new URL(request.url)
    const id = searchParams.get("id")

    if (id != null) {
        await connectMongoDB()
        const user = await User.findById(id)
        return NextResponse.json(user)
    } else {
        
        await connectMongoDB()
        const Users = await User.find()
        return NextResponse.json(Users)
    }
}



/**
 * 
 * @param {*} request 
 */
export async function POST(request){
    await connectMongoDB()
    const data = await request.json()
    const response = await User.create(data)
    if (!response) {
        return NextResponse.json({message : "data not added.."})
    }
    return NextResponse.json({message : "Data added success!"})
    
    
}
/**
 * 
 * @param {id} request 
 * @returns 
 */
export async function DELETE(request){
    try {
        await connectMongoDB()
        const {searchParams} = new URL(request.url)
        const id = searchParams.get('id')
        const userDelete = await User.findByIdAndDelete(id)
        return NextResponse.json({message : "true"})
    } catch (error) {
        return NextResponse.json({message : "User can't deleted!"})
    }
    
}

// update user
export async function PUT(request){

    try {
        await connectMongoDB()
        const {id, name, email, call, gender, photo} = await request.json()
        const user = await User.findByIdAndUpdate(id, {
            name, email, call, gender, photo
        })
        return NextResponse.json(user)
    } catch (error) {
        return NextResponse.json(error.message)
    }
}