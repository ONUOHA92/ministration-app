export class Template {

    id: number
    uuid: string
    title: string
    url: string
    label: string
    parent: number
    layout_id: string
    category: string
    meta_title: string
    meta_description: string
    meta_keywords: string
    header_position: number
    footer_position: number
    page_order: number
    status: number
}

export class Layout {
    id: number
    label: string
    layout: string
    content?: string
    status: number
}

export class Blocks {
    id: number
    template_id: number
    block_name: string
    multiple: number
    item_max: number
    status: number
}


export class Groups {

    id: number
    block_id: number
    name: string
    element: Elements[]
    status: number
}

export class Elements {

    id: number
    group_id: number
    name: string
    value: string
    type: string
    status: number
}

export class Images {
    dirname: string
    ext: string
    id: number
    name: string
    path: string
    url: string
}

export class Levite {
    name: string
    ministrationType: string[]
    ministrationDate: Date
    ministrationService: string[];
    backup?: Backup[]
    songs?: Songs[]

}


export class Songs {
    title: string
    intro: string
    link: string
    lyricslink: string
    lyrics: string
}


export class Backup {
    name: string
}