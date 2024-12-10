import gophishClient from '../client'
import { Campaign, Group, Template } from '../model/gophish'

export const campaignController = {
    // Create a new campaign
    async createCampaign(campaign: Campaign): Promise<Campaign> {
        const response = await gophishClient.post('/campaigns/', campaign)
        if (response.status !== 201) {
            throw new Error(`Failed to create campaign: ${response.data.message}`)
        }
        return response.data
    },

    // Get all campaigns
    async getAllCampaigns(): Promise<Campaign[]> {
        const response = await gophishClient.get('/campaigns/')
        if (response.status !== 200) {
            throw new Error(`Failed to fetch campaigns: ${response.data.message}`)
        }
        return response.data
    },

    // Get campaign by ID
    async getCampaign(id: number): Promise<Campaign> {
        const response = await gophishClient.get(`/campaigns/${id}`)
        if (response.status !== 200) {
            throw new Error(`Failed to fetch campaign: ${response.data.message}`)
        }
        return response.data
    },

    // Complete a campaign
    async completeCampaign(id: number): Promise<Campaign> {
        const response = await gophishClient.get(`/campaigns/${id}/complete`)
        if (response.status !== 200) {
            throw new Error(`Failed to complete campaign: ${response.data.message}`)
        }
        return response.data
    }
} 