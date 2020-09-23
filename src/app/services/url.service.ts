import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UrlService {

  constructor() { }

  getNewUrl(str: string) {
    let baseUrl = "/index.php/rest/default/V1/products?searchCriteria[filter_groups][0][filters][0][field]=category_id&%20searchCriteria[filter_groups][0][filters][0][value]="
    let b = str + "&%20searchCriteria[filter_groups][0][filters][0][condition_type]=eq&searchCriteria[pageSize]=10";
    let finalUrl = baseUrl + b;
    return finalUrl
  }
  getProductByid(id: string) {
    let url = `/index.php/rest/V1/products?searchCriteria[filterGroups][0][filters][0][field]=entity_id&searchCriteria[filterGroups][0][filters][0][condition_type]=eq&searchCriteria[filterGroups][0][filters][0][value]=${id}`
    return url;

  }
}
