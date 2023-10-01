import { Component, Input } from '@angular/core';
import { map } from 'rxjs/operators';

import { EditionLevelType, TextFlow } from 'src/app/app.config';
import { HighlightData, Lb } from '../../models/evt-models';
import { register } from '../../services/component-register.service';
import { EVTModelService } from '../../services/evt-model.service';
import { EditionlevelSusceptible, Highlightable, TextFlowSusceptible } from '../components-mixins';
import { EntitiesSelectItem } from '../entities-select/entities-select.component';

export interface ILbComponent extends EditionlevelSusceptible, TextFlowSusceptible, Highlightable { }

@register(Lb)
@Component({
  selector: 'evt-lb',
  templateUrl: './lb.component.html',
  styleUrls: ['./lb.component.scss'],
})
export class LbComponent implements ILbComponent {
  @Input() data: Lb;

  @Input() editionLevel: EditionLevelType;
  @Input() textFlow: TextFlow;
  // @Input() highlight: boolean;
  // @Input() highlightColor: string;

  @Input() highlightData: HighlightData;
  @Input() itemsToHighlight: EntitiesSelectItem[];

  get displayBlock$() {
    return this.evtModelService.lines$.pipe(
      map((lines) => lines.length > 0),
      map((hasLines) => {
        // If line has no information about number or the ID line is shown as a block item, no matters what
        if (!this.data.attributes.id && !this.data.attributes.n) {
          return true;
        }
        // Otherwise:
        // - in diplomatic and interpretative edition, if the text has at least one line,
        // those are show as block items, unless current text flow is verses
        // - in critical editionm lines are always shown as inline items, unless current text flow is prose
        switch (this.editionLevel) {
          case 'diplomatic':
          case 'interpretative':
            return this.textFlow === 'verses' ? false : hasLines;
          case 'critical':
            return this.textFlow === 'prose';
        }
      }),
    );
  }

  constructor(
    private evtModelService: EVTModelService,
  ) {
  }


}
