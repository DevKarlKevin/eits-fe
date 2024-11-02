import {Injectable} from '@angular/core';
import {ApiService} from '../../service/api.service';
import {HttpParams} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MeasureService {

  constructor(private apiService: ApiService) {}
  getCatalogByVersion(version: number) {
    return this.apiService.get<any>(`catalog`, new HttpParams().set('version', version))
  }

  getCatalogByVersionAndId(version: number, id: string) {
    return this.apiService.get<any>(`catalog/${version}/${id}`)
  }

  getContentTree(version: number) {
    return this.apiService.get<any>(`content_tree/${version}`)
  }
}
