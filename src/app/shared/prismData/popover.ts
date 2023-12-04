export let popHTML1 =
    `<div class="row row-sm tx-center">
    <div class="col-sm-6 col-lg-3">
        <button type="button" class="btn ripple btn-primary" placement="top"
            ngbPopover="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."
            popoverTitle="Popover on top">
            Popover Top
        </button>
    </div>
    <div class="col-sm-6 col-lg-3 mg-t-30 mg-sm-t-0">
        <button type="button" class="btn ripple btn-secondary" placement="bottom"
            ngbPopover="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."
            popoverTitle="Popover on top">
            Popover Bottom
        </button>
    </div>
    <div class="col-sm-6 col-lg-3 mg-t-30 mg-lg-t-0">
        <button type="button" class="btn ripple btn-info" placement="left"
            ngbPopover="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."
            popoverTitle="Popover on top">
            Popover Left
        </button>
    </div>
    <div class="col-sm-6 col-lg-3 mg-t-30 mg-lg-t-0">
        <button type="button" class="btn ripple btn-danger" placement="right"
            ngbPopover="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."
            popoverTitle="Popover on top">
            Popover Right
        </button>
    </div>
</div>`
export let popTS1 =
    `import { Component } from '@angular/core';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.scss']
})
export class PopoverComponent { }`


export let popHTML2 =
    `<div class="btn btn-list">
    <button type="button" class="btn ripple btn-primary" placement="top"
        ngbPopover="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."
        popoverTitle="Popover on top">
        Header Color
    </button>
    <button type="button" class="btn ripple btn-secondary" placement="top"
        ngbPopover="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."
        popoverTitle="Popover on top" popoverClass="colorHeadSecondary">
        Header Color
    </button>
</div>`

export let popTS2 =
    `import { Component } from '@angular/core';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.scss']
})
export class PopoverComponent { }`

export let popSCSS2 =
    `.colorHeadSecondary .popover-header {
    background-color: #e57a2d;
    color: #fff;
}`

export let popHTML3 =
    `<div class="btn btn-list">
    <button type="button" class="btn ripple btn-primary" placement="top"
        ngbPopover="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."
        popoverTitle="Popover on top" popoverClass="fullPrimary">
        Header Color
    </button>
    <button type="button" class="btn ripple btn-secondary" placement="top"
        ngbPopover="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."
        popoverTitle="Popover on top" popoverClass="fullSecondary">
        Header Color
    </button>
</div>`
export let popTS3 =
    `import { Component } from '@angular/core';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.scss']
})
export class PopoverComponent { }`

export let popSCSS3 =
    `.fullPrimary .popover-body, .fullPrimary .popover-header {
    background-color: #4A93FE;
    color: #fff;
    border: none;
}
.fullPrimary.popover, .fullSecondary.popover {
    border: none;
}
.fullSecondary .popover-header, .fullSecondary .popover-body {
    background-color: #e57a2d;
    color: #fff;
    border: none;
}
.fullPrimary.bs-popover-top > .arrow::after{
    border-top-color: #4A93FE;
}
.fullSecondary.bs-popover-top > .arrow::after{
    border-top-color: #e57a2d;
}`
