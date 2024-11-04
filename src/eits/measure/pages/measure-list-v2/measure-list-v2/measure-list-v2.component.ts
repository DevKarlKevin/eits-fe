import {Component, OnInit} from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import {MatSelectModule} from '@angular/material/select';
import {CommonModule} from '@angular/common';
import {MEASURE_LIST_TABLE_COLUMNS, VERSIONS} from '../../../measure.const';
import {Measure} from '../../../../models/measure.component';
import {MeasureService} from '../../../service/measure.service';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MenuGroup} from '../../../../models/menu-group.component';
import {LevelDisplayV2Component} from '../../../../components/level-display-v2/level-display-v2.component';

@Component({
  selector: 'app-measure-list-v2',
  standalone: true,
  imports: [
    CommonModule,
    MatSlideToggleModule,
    MatCardModule,
    MatTableModule,
    MatSelectModule,
    LevelDisplayV2Component
  ],
  templateUrl: './measure-list-v2.component.html'
})
export class MeasureListV2Component implements OnInit {
  selectedVersion = 2023;
  measures = [];
  displayedColumns: string[] = MEASURE_LIST_TABLE_COLUMNS;
  filteredMeasures: Measure[] = []
  versions: number[] = VERSIONS;
  selectedGroup: MenuGroup = new MenuGroup();
  topLevelGroups: MenuGroup[] = [];
  levelOptions: MenuGroup[] = [];
  isLoadingVersion = false;
  tableLoading = false;
  errorMsg = '';

  constructor(private measureService: MeasureService) {
  }

  ngOnInit() {
    this.onVersionChange();
  }

  onVersionChange(): void {
    this.isLoadingVersion = true;
    this.measureService.getContentTree(this.selectedVersion).subscribe(response => {
      this.topLevelGroups = response;
      this.isLoadingVersion = false;
    }, error => this.errorMsg = error);
  }

  onGroupChange() {
    if (this.selectedGroup) {
      this.levelOptions = this.selectedGroup.child_objects;
    }
  }

  onLevelChange(level: any) {
    this.tableLoading = true;
    this.filteredMeasures = level.child_objects.flatMap((group: MenuGroup) =>
          group.child_objects?.map((measure: MenuGroup) => ({
            groupType: group.title,
            measureCode: measure.title.substring(0, measure.title.indexOf(' ')),
            bodyWithTitle: `<h6>${measure.title}</h6>${measure.content}`
          })) ?? []
    );
    this.tableLoading = false;
  }
}
