import {Component, EventEmitter, Input, Output} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Module} from '../../models/module.component';

@Component({
  selector: 'app-level-display',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './level-display.component.html'
})
export class LevelDisplayComponent {
  @Input() group: any;
  @Output() levelSelected = new EventEmitter<Module>();

  onValueSelected(selectedLevel: any) {
    this.levelSelected.emit(selectedLevel);
  }
}
