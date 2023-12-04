import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppService } from '../app.service';

@Injectable({
  providedIn: 'root'
})
export class BlogService extends AppService {

  all() {

    return this.get(`cms/blogs/fetch`, {})
  }



  create(body = {}) {

    return this.post(`cms/blogs/create`, body)
  }

  update(body = {}) {
    return this.post(`cms/blogs/update`, body);
  }

  delete(identifier) {
    return this.get(`cms/blogs/delete/${identifier}`, {})
  }

  fetch(identifier) {
    return this.get(`cms/blogs/get/${identifier}`, {})
  }

  search(body) {
    return this.post(`cms/blogs/search`, body)
  }

}
