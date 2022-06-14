import { Component, OnInit } from '@angular/core';
import { format, parseISO, } from 'date-fns';
import { th } from 'date-fns/esm/locale'

@Component({
  selector: 'app-consent-j',
  templateUrl: './consent-j.page.html',
  styleUrls: ['./consent-j.page.scss'],
})
export class ConsentJPage implements OnInit {

  public isDisplayIconMode: boolean = false;
  constructor() { }

  ngOnInit() {
  }

  public updateDisplayMode(event) {
    this.isDisplayIconMode = event.detail.value == "true";
  }

  public formatDate(value: string) {
    return format(parseISO(value), 'dd MMMM yyyy', { locale: th });
  }

}
