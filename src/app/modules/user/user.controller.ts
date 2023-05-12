import { Request,Response,NextFunction } from "express";
import { createUserToDB, getAdminUserFromDb, getUserByIdFromDb, getUserFromDb } from "./user.service";

export const getUser =async (req: Request, res: Response, next: NextFunction) => {

  const users =await getUserFromDb()

res.status(200).json({
    status:'success',
    data:users
})
}
export const createUser =async(req: Request, res: Response, next: NextFunction)=>{
const data = req.body
const user =await createUserToDB(data)

res.status(200).json({
    status:'success',
    data:user
})
}
export const getUserById = async (req: Request, res: Response, next: NextFunction)=>{
   const id = req.params.id
   const user =await getUserByIdFromDb(id)

res.status(200).json({
    status:'success',
    data:user
})
}
export const getAdminUser= async (req: Request, res: Response, next: NextFunction)=>{

   const users =await getAdminUserFromDb()

res.status(200).json({
    status:'success',
    data:users
})
}