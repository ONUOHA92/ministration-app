export class Chat {
    public sourceid: string
    public targetid: string
    public is_group: number
    public message: string = ""
    public channel?: string
}