import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Module} from '../../models/module.component';
import {NgForOf, NgIf} from '@angular/common';

@Component({
  selector: 'app-level-display-v2',
  standalone: true,
  imports: [
    NgForOf,
    NgIf
  ],
  templateUrl: './level-display-v2.component.html'
})
export class LevelDisplayV2Component {
  @Input() group: any;
  @Output() levelSelected = new EventEmitter<Module>();

  onValueSelected(selectedLevel: any) {
    this.levelSelected.emit(selectedLevel);
  }
}
