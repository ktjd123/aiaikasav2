import express from 'express'

const router = express.Router()

router.get('/', (req,res) => {
    res.json({
        version: 'v1'
    })
})

export default router