import express from 'express'

import functionArray from '../controllers/functionsController.js'


const router = express.Router()

router.get("/", (req, res) => {
  res.json({
    message: "Please use 'POST' method on this URI and post your request in this format:",
    example: { data: ["2", "a", "y", "4", "&", "-", "*", "5", "92", "b"] }
  });
});


router.post("/", functionArray)

export default router
