import express from 'express'
import cors from 'cors'
import gophishRoutes from './routes/gophishRoutes'

const app = express()
const port = process.env.GOPHISH_API_PORT || 3004

app.use(cors())
app.use(express.json())

// Routes
app.use('/api/gophish', gophishRoutes)

app.listen(port, () => {
    console.log(`Gophish API Service running on port ${port}`)
})

export default app 