import {Component, OnInit} from '@angular/core';
import {MeasureService} from '../../service/measure.service';
import {MatCardModule} from '@angular/material/card';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatTableModule} from '@angular/material/table';
import {MEASURE_LIST_TABLE_COLUMNS, VERSIONS} from '../../measure.const';
import {MatSelectModule} from '@angular/material/select';
import {CommonModule} from '@angular/common';
import {ModuleGroup} from '../../../models/module-group.component';
import {LevelDisplayComponent} from '../../../components/level-display/level-display.component';
import {ModulesGroup} from '../../../models/modules-group.component';
import {Measure} from '../../../models/measure.component';
import {MeasureGroup} from '../../../models/measure-group.component';

@Component({
  selector: 'app-measure-list',
  standalone: true,
  imports: [
    CommonModule,
    MatSlideToggleModule,
    MatCardModule,
    MatTableModule,
    MatSelectModule,
    LevelDisplayComponent
  ],
  templateUrl: './measure-list.component.html'
})
export class MeasureListComponent implements OnInit {
  measures = [];
  displayedColumns: string[] = MEASURE_LIST_TABLE_COLUMNS;
  filteredMeasures: Measure[] = []
  versions: number[] = VERSIONS;
  selectedVersion = 2023;
  selectedGroup: ModulesGroup = new ModulesGroup();
  moduleGroups: ModulesGroup[] = [];
  isLoadingVersion = false;
  tableLoading = false;

  constructor(private measureService: MeasureService) {
  }

  ngOnInit() {
    this.onVersionChange();
  }

  onVersionChange(): void {
    this.isLoadingVersion = true;
    this.measureService.getCatalogByVersion(this.selectedVersion).subscribe(response => {
      this.moduleGroups = response.modules;
      this.isLoadingVersion = false;
    });
  }

  onLevelChange(level: any) {
    this.tableLoading = true;
    this.measureService.getCatalogByVersionAndId(this.selectedVersion, level.moduleId).subscribe((data) => {
      this.filteredMeasures = data.measures.flatMap((group: MeasureGroup) =>
        group.measures.map((measure: Measure) => ({
          groupType: group.groupType,
          measureCode: measure.measureCode,
          bodyWithTitle: `<h6>${measure.measureTitle}</h6>${measure.body}`
        }))
      );
      this.tableLoading = false;
    })
  }
}
