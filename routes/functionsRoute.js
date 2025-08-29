import express from 'express'

import functionArray from '../controllers/functionsController.js'


const router = express.Router()

router.post("/", functionArray)

export default router
