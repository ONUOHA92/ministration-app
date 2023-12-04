
export interface IPage
{
    id?:number;	
    title?: string; 
    url?: string;
    label?: string;	
    parent?: string;	
    layout?: string;	
    category?: string;
    meta_title?: string;	
    meta_description?: string;	
    meta_keywords?: string;	
    header_position?: string;	
    footer_position?: string;	
    page_order?: string;	
    status?: string;	
    created_at?: string;
    updated_at?: string;
    blocks?: Array<IBlock>;
}

export interface IBlock
{    	
    id?: number;
    template_id?: number;
    block_name?: string;
    multiple?: string;
    item_max?: number;
    status?: string;
    created_at?: string;
    updated_at?: string;
    groups?: Array<IGroup>;
}

export interface IGroup
{
    id?: number;
    block_id?: number;	
    group_name?: string;	
    status?: number;	
    created_at?: string;	
    updated_at?: string;
    elements?: Array<IElement>;
}

export interface IElement
{
    id?: number;	
    group_id?: number;	
    name?: string;	
    value?: string;	
    type?: string;	
    created_at?: string;	
    updated_at?: string;	
}