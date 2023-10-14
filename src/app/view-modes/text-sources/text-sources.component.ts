import { Component, OnInit } from '@angular/core';
import {
  DisplayGrid,
  GridsterComponent,
  GridsterConfig,
  GridsterItem,
  GridsterItemComponent,
  GridType
} from 'angular-gridster2';
import { map, shareReplay } from 'rxjs/operators';
import { Page } from 'src/app/models/evt-models';
import { EVTStatusService } from 'src/app/services/evt-status.service';
import { EditionLevel } from '../../app.config';
import { TextPanelComponent } from '../../panels/text-panel/text-panel.component';
import { SourcesPanelComponent } from '../../panels/sources-panel/sources-panel.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'evt-text-sources',
  templateUrl: './text-sources.component.html',
  styleUrls: ['./text-sources.component.scss'],
  standalone:  true,
  imports: [
    GridsterComponent,
    GridsterItemComponent,
    TextPanelComponent,
    SourcesPanelComponent,
    CommonModule,
  ]
})
export class TextSourcesComponent implements OnInit {
  public options: GridsterConfig = {};
  public textPanelItem: GridsterItem = { cols: 1, rows: 1, y: 0, x: 0 };
  public sourcesPanelItem: GridsterItem = { cols: 1, rows: 1, y: 0, x: 1 };

  public currentPageID$ = this.evtStatusService.currentStatus$.pipe(
    map(({ page }) => page.id),
  );

  public currentEditionLevel$ = this.evtStatusService.currentStatus$.pipe(
    map(({ editionLevels }) => editionLevels[0]),
    shareReplay(1),
  );

  constructor(
    private evtStatusService: EVTStatusService,
  ) {
  }

  ngOnInit() {
    this.initGridster();
  }

  changePage(selectedPage: Page) {
    this.evtStatusService.updatePage$.next(selectedPage);
  }

  changeEditionLevel(editionLevel: EditionLevel) {
    this.evtStatusService.updateEditionLevels$.next([editionLevel?.id]);
  }

  private initGridster() {
    this.options = {
      gridType: GridType.Fit,
      displayGrid: DisplayGrid.None,
      margin: 0,
      maxCols: 2,
      maxRows: 1,
      draggable: {
        enabled: true,
        ignoreContent: true,
        dragHandleClass: 'panel-header',
      },
      resizable: {
        enabled: false,
      },
    };
  }
}
