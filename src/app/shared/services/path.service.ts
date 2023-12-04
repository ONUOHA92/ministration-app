import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PathService {

  constructor() { }

  public CHECK_TOKEN_ACCESS       = `auth/check/access`;
  public SERVICE_SEARCH_RECORD    = `report/search/reports`

  public CREATE_EQUIPMENT_RECORD  = `report/create/equipment`;
  public CREATE_HOSPITAL_RECORD   = `report/create/hospital`;
  public CREATE_RECORDS           = `report/create/items`;
  
  public SERVICE_LIST_RECORD_ITEMS  = 'report/fetch/items'
  public SERVICE_LIST_EQUIPMENTS    = 'report/fetch/equipment'
  public SERVICE_LIST_HOSPITALS     = 'report/fetch/hospital'

  public LIST_ALL_USERS             = 'user/list';
  public SEND_REPORTING_SERVICE     = 'report/send/project/service/record';

  public LIST_PRIVILEGES            = 'auth/admin/privileges';

}
