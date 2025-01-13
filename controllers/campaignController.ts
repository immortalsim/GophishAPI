import { Request, Response, RequestHandler } from 'express';
import { campaignUtils } from '../gophishutils/campaignUtils';
import supabaseClient from '../../supabaseClient';
import { Campaign } from '../model/gophish';

export const createCampaign: RequestHandler = async (req: Request, res: Response) => {
    try {
        const campaignData = req.body;

        // Extract fields for Gophish
        const gophishCampaign: Campaign = {
            name: campaignData.name,
            template: campaignData.template,
            groups: campaignData.groups,
            created_date: campaignData.created_date,
            launch_date: campaignData.launch_date,
            send_by_date: campaignData.send_by_date,
            completed_date: campaignData.completed_date,
            page: campaignData.page,
            status: campaignData.status,
            results: campaignData.results,
            timeline: campaignData.timeline
        };

        const createdCampaign = await campaignUtils.createCampaign(gophishCampaign);

        // Send all fields to Supabase
        const { data, error } = await supabaseClient
            .from('campaigns')
            .insert([campaignData]);

        if (error) {
            throw new Error(`Failed to save campaign to Supabase: ${error.message}`);
        }

        res.status(201).json({ gophishCampaign: createdCampaign, supabaseCampaign: data });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getAllCampaigns: RequestHandler = async (req: Request, res: Response) => {
    try {
        const campaigns = await campaignUtils.getAllCampaigns();
        const { data, error } = await supabaseClient.from('campaigns').select('*');
        if (error) {
            throw new Error(`Failed to fetch campaigns from Supabase: ${error.message}`);
        }
        res.status(200).json({ gophishCampaigns: campaigns, supabaseCampaigns: data });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getCampaign: RequestHandler = async (req: Request, res: Response) => {
    try {
        const campaign = await campaignUtils.getCampaign(parseInt(req.params.id));
        const { data, error } = await supabaseClient.from('campaigns').select('*').eq('id', req.params.id);
        if (error) {
            throw new Error(`Failed to fetch campaign from Supabase: ${error.message}`);
        }
        res.status(200).json({ gophishCampaign: campaign, supabaseCampaign: data });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const completeCampaign: RequestHandler = async (req: Request, res: Response) => {
    try {
        const campaign = await campaignUtils.completeCampaign(parseInt(req.params.id));
        const { data, error } = await supabaseClient.from('campaigns').select('*').eq('id', req.params.id);
        if (error) {
            throw new Error(`Failed to fetch campaign from Supabase: ${error.message}`);
        }
        res.status(200).json({ gophishCampaign: campaign, supabaseCampaign: data });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
