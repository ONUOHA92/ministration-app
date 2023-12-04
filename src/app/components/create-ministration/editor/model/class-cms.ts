import { IBlock, IElement, IGroup, IPage } from "./interfaces-cms";

export class Page implements IPage 
{
    blocks: Array<IBlock> = new Array<Block>();
}

export class Block implements IBlock {
    id?: number;
    template_id?: number;
    block_name?: string;
    multiple?: string;
    item_max?: number;
    status?: string;
    created_at?: string;
    updated_at?: string;
    groups: Array<IGroup> = new Array<Group>()
}

export class Group implements IGroup {
    elements:Array<IElement> = new Array<Element>();
}

export class Element implements IElement {
    group_id?: number;	
    group_uuid?: string;	
    name?: string;	
    value?: string;	
    type?: string;
}