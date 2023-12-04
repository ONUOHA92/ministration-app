export class Blog {

    public id: number
    public uuid: number
    public category_id: number
    public title: string
    public caption: string
    public cover: string
    public url: string
    public content: string
    public meta_title: string
    public meta_description: string
    public meta_keywords: string
    public status: number
}


export class Levite {
    name: string
    ministrationType: string
    ministrationDate: Date
    ministrationService: string;
    backup?: string[]
    songs?: string[]

}