import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MemoryService {

  public data: any;

  public inputAddressByIdCard: any;
  public inputAddressByCurrent: any;
  public inputTel: any;

  constructor() { }
}
