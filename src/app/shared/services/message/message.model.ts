export class Message {

    public id: number
    public client_id: number
    public from: string
    public to: string
    public subject: string
    public message: string
    public is_urgent: number
    public is_delivered: number
    public is_rejected: number
    public schedule_time?: string
    public type?: string
    public status: number
    public created_at: string
    public updated_at: string
}



// "status":"success",
// "message":"Message request successfully completed"
// "data": ""
// }