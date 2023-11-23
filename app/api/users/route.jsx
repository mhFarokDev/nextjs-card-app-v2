import connectMongoDB from "@/config/db";
import User from "@/models/User";
import { NextResponse } from "next/server";


/**
 * get data from mongoDB
 * @returns api/users
 */
export async function GET(){
    connectMongoDB()
    const Users = await User.find()
    return NextResponse.json(Users)
}