import { Component } from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';
import {MeasureListComponent} from '../measure-list/measure-list.component';
import {MeasureListV2Component} from '../measure-list-v2/measure-list-v2/measure-list-v2.component';

@Component({
  selector: 'app-tab-container',
  standalone: true,
  imports: [MatTabsModule, MeasureListComponent, MeasureListV2Component],
  templateUrl: './tab-container.component.html'
})
export class TabContainerComponent {

}
