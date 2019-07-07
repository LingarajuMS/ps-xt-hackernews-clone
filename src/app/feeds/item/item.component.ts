import { Component, Input, OnInit } from '@angular/core';
import { Story } from '../../shared/models/story';

import { SettingsService } from '../../shared/services/services.module';
import { Settings } from '../../shared/models/settings';

@Component({
  selector: 'item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  @Input() item;
  settings: Settings;

  constructor(private _settingsService: SettingsService) {
    this.settings = this._settingsService.settings;
  }

  ngOnInit() {}

  get hasUrl(): boolean {
    if(this.item.url) {
    return this.item.url.indexOf('http') === 0;
    }
  }

}
