/**
 * ALL JOB RELATED INTERFACES HERE
 */

import { UserList } from "./auth.models"


export interface IJob {

    id?: number
    name?: string
    start_date?: string
    end_date?: string
    open_at?: string
    close_at?: string
    location?: string
    type?: string
    requirements?: string
    workers_needed?: string
    created_by_id?: string
    show_on_calendar?: string
    status?: number

}


export class Assigned {
    clocked_in?: string
    clocked_out?: string
    created_at: string
    id: number
    job_id: number
    status: number
    user_id: number
    updated_at: string
    job_assigned_date: string
    is_reminder_sent: number
    job: Job = new Job()
    user: UserList = new UserList()
}

export class Schedule {

    created_at: string
    days: string
    hours: string
    id: number
    schedule_id: number
    status: number
    updated_at: string
    user_id: number
}

/**
 * ALL JOB RELATED CLASSES
 */

export class Job implements IJob {
    name?: string;
    id?: number
    start_date?: string
    end_date?: string
    open_at?: string
    close_at?: string
    location?: string
    type?: string
    requirements?: string
    workers_needed?: string
    created_by_id?: string
    show_on_calendar?: string
    status?: number
}


export class JobAssignedPayload {
    sender_id: number
    user_id: number
    message: string
}


