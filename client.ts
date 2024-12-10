import axios from 'axios'

const gophishClient = axios.create({
    baseURL: process.env.GOPHISH_URL || 'https://localhost:3333/api',
    headers: {
        'Authorization': `Bearer ${process.env.GOPHISH_API_KEY}`,
        'Content-Type': 'application/json'
    },
    validateStatus: () => true // Handle Gophish error responses in controllers
})

export default gophishClient 