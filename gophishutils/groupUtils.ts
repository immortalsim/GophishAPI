import gophishClient from '../client'
import { Group } from '../model/gophish'

export const groupUtils = {
    // Create a new group
    async createGroup(group: Group): Promise<Group> {
        const response = await gophishClient.post('/groups/', group)
        if (response.status !== 201) {
            throw new Error(`Failed to create group: ${response.data.message}`)
        }
        return response.data
    },

    // Get all groups
    async getAllGroups(): Promise<Group[]> {
        const response = await gophishClient.get('/groups/')
        if (response.status !== 200) {
            throw new Error(`Failed to fetch groups: ${response.data.message}`)
        }
        return response.data
    },

    // Get group by ID
    async getGroup(id: number): Promise<Group> {
        const response = await gophishClient.get(`/groups/${id}`)
        if (response.status !== 200) {
            throw new Error(`Failed to fetch group: ${response.data.message}`)
        }
        return response.data
    },

    // Update a group
    async updateGroup(id: number, group: Group): Promise<Group> {
        const response = await gophishClient.put(`/groups/${id}`, group)
        if (response.status !== 200) {
            throw new Error(`Failed to update group: ${response.data.message}`)
        }
        return response.data
    },

    // Delete a group
    async deleteGroup(id: number): Promise<void> {
        const response = await gophishClient.delete(`/groups/${id}`)
        if (response.status !== 200) {
            throw new Error(`Failed to delete group: ${response.data.message}`)
        }
    }
}
