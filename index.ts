const express = require('express')
const cors = require('cors')
import campaignRoutes from './routes/campaignRoutes'
import groupRoutes from './routes/groupRoutes'

const app = express()
const port = process.env.GOPHISH_API_PORT || 3004

app.use(cors())
app.use(express.json())

// Routes
app.use('/gophish', campaignRoutes)
app.use('/gophish', groupRoutes)

app.listen(port, () => {
    console.log(`Gophish API Service running on port ${port}`)
})

export default app
