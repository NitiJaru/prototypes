import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MemoryService {

  public data: any;

  public kycAddressIdCard: any;
  public kycAddressCurrent: any;
  public kycTel: any;

  constructor() { }
}
