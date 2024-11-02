import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {MatToolbar} from '@angular/material/toolbar';
import {MatIcon} from '@angular/material/icon';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatToolbar, MatIcon, MatSlideToggleModule],
  templateUrl: './app.component.html'
})
export class AppComponent {
}
