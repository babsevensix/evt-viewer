import { Component, Input, Output } from '@angular/core';
import { BehaviorSubject, combineLatest } from 'rxjs';
import { distinctUntilChanged, filter, map } from 'rxjs/operators';

import { EVTModelService } from '../../services/evt-model.service';
import { CommonModule } from '@angular/common';
import { UiComponentsModule } from '../../ui-components/ui-components.module';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'evt-page-selector',
  templateUrl: './page-selector.component.html',
  styleUrls: ['./page-selector.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    UiComponentsModule,
    FormsModule,
      TranslateModule,
  ]
})
export class PageSelectorComponent {
  public pages$ = this.evtModelService.pages$;

  // tslint:disable-next-line: variable-name
  private _pageID: string;
  @Input() set pageID(p: string) {
    this._pageID = p;
    this.selectedPage$.next(this._pageID);
  }
  get pageID() { return this._pageID; }

  selectedPage$ = new BehaviorSubject<string>(undefined);

  @Output() selectionChange = combineLatest([
    this.pages$,
    this.selectedPage$.pipe(distinctUntilChanged()),
  ]).pipe(
    filter(([pages, pageID]) => !!pageID && !!pages && pages.length > 0),
    map(([pages, pageID]) => pages.find((p) => p.id === pageID)),
  );

  constructor(
    private evtModelService: EVTModelService,
  ) {
  }

}
