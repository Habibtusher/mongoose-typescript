import express, { Router } from 'express';
import { createUser, getAdminUser, getUser, getUserById } from './user.controller';


const router = express.Router()

router.get('/',getUser)
router.post('/create-user',createUser)
router.get('/admin',getAdminUser)
router.get('/:id',getUserById)


export default router;