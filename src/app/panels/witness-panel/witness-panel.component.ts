import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { EditionDataService } from '../../services/edition-data.service';
import { distinctUntilChanged, first, map, startWith, switchMap, tap } from 'rxjs/operators';
import { PrefatoryMatterParserService } from '../../services/xml-parsers/prefatory-matter-parser.service';
import { EVTModelService } from '../../services/evt-model.service';
import { BehaviorSubject, merge, Subject } from 'rxjs';
import { EVTStatusService } from '../../services/evt-status.service';
import { Page } from '../../models/evt-models';
import { EntitiesSelectItem } from '../../components/entities-select/entities-select.component';
import { EditionLevel, TextFlow } from '../../app.config';
import { CommonModule } from '@angular/common';
import { PanelComponent } from '../../ui-components/panel/panel.component';
import { PageComponent } from '../../components/page/page.component';

@Component({
  selector: 'evt-witness-panel',
  templateUrl: './witness-panel.component.html',
  styleUrls: ['./witness-panel.component.scss'],
  providers:[
    EditionDataService,
    PrefatoryMatterParserService,
    EVTModelService,
    EVTStatusService
  ],
  standalone: true,
  imports: [
    CommonModule,
    PanelComponent,
    PageComponent,

  ]

})
export class WitnessPanelComponent implements OnInit{
  @Input() witness: string;
  @Output() hide = new EventEmitter<boolean>();
  updatePageFromScroll$ = new BehaviorSubject<void>(undefined);
  updatePage$ = new BehaviorSubject<Page>(undefined);

  public itemsToHighlight$ = new Subject<EntitiesSelectItem[]>();

  editionLevel: EditionLevel= { 'id': 'diplomatic', 'label': 'diplomatic', 'enable': true };
  private _tf: TextFlow;
  public set textFlow(tf: TextFlow) {
    this._tf = tf;
  }
  public get textFlow() {
    return this._tf;
  }

  constructor(public editionDataService: EditionDataService, public evtModelService: EVTModelService,public evtStatus: EVTStatusService,) {
    evtStatus.updateViewMode$.next({
      icon:'', iconSet: undefined, id:'collation', label: 'prova', enable: true
    });
  }

  emitHide() {
    this.hide.emit(true);
  }

  ngOnInit(): void {
    this.editionDataService.editionUrlNumber$.next(1);

    this.editionDataService.parsedEditionSource$.pipe(
        first()
    ).subscribe((res)=>{
      console.log('res ', res);
    });


  }

  public currentPage$ = merge(
      this.updatePageFromScroll$.pipe(
          startWith({}),
          tap(()=>{
            console.log('current page started');
          }),
          switchMap(()=> this.evtModelService.pages$
              // , this.evtStatus.currentPage$
          ),
          tap(()=>{
            console.log('with latest');
          }),
          map(( pages
                 // , currentPage
               ) => {
            // if (this.mainContent && this.editionLevelID === 'critical') {
            //   const mainContentEl: HTMLElement = this.mainContent.nativeElement;
            //   const pbs = mainContentEl.querySelectorAll('evt-page');
            //   let pbCount = 0;
            //   let pbVisible = false;
              //let pbId = '104v';
            //   const docViewTop = mainContentEl.scrollTop;
            //   const docViewBottom = docViewTop + mainContentEl.parentElement.clientHeight;
            //   while (pbCount < pbs.length && !pbVisible) {
            //     pbId = pbs[pbCount].getAttribute('data-id');
            //     const pbElem = mainContentEl.querySelector<HTMLElement>(`evt-page[data-id="${pbId}"]`);
            //     const pbRect = pbElem.getBoundingClientRect();
            //     if (pbRect.top && (pbRect.top <= docViewBottom) && (pbRect.top >= docViewTop)) {
            //       pbVisible = true;
            //     } else {
            //       pbCount++;
            //     }
            //   }
            //   if (pbVisible && currentPage?.id !== pbId) {
            //     this.updatingPageFromScroll = true;
               //let currentPage = pages.find((p) => p.id === pbId);
            //   }
            // }
            console.log('pages number', pages.length);
            return pages[0];
          }),
      ),
      this.updatePage$,
  ).pipe(
      distinctUntilChanged((x, y) => x?.id === y?.id),
  );

}
