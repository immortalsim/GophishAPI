export interface Campaign {
    id?: number
    name: string
    created_date?: string
    launch_date?: string
    send_by_date?: string
    completed_date?: string
    template: Template
    page?: Page
    status?: CampaignStatus
    results?: CampaignResult[]
    groups: Group[]
    timeline?: CampaignEvent[]
}

export interface Template {
    id?: number
    name: string
    subject: string
    text: string
    html: string
    modified_date?: string
    attachments?: any[]
}

export interface Group {
    id?: number
    name: string
    modified_date?: string
    targets: Target[]
}

export interface Target {
    email: string
    first_name: string
    last_name: string
    position?: string
}

export interface Page {
    id?: number
    name: string
    html: string
    modified_date?: string
    capture_credentials: boolean
    capture_passwords: boolean
}

export interface CampaignResult {
    id?: string
    status: CampaignStatus
    ip?: string
    latitude?: number
    longitude?: number
    send_date?: string
    reported?: boolean
}

export interface CampaignEvent {
    email: string
    time?: string
    message: string
    details?: string
}

export type CampaignStatus = 'In progress' | 'Completed' | 'Scheduled' | 'Email Sent' | 'Error' 