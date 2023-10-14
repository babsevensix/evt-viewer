import { Component, Input } from '@angular/core';

import { HighlightData, TitleStmt } from '../../models/evt-models';
import { register } from '../../services/component-register.service';
import { EditionlevelSusceptible, Highlightable, TextFlowSusceptible } from '../components-mixins';
import { EntitiesSelectItem } from '../entities-select/entities-select.component';
import { EditionLevelType, TextFlow } from '../../app.config';

@Component({
  selector: 'evt-title-stmt',
  templateUrl: './title-stmt.component.html',
  styleUrls: ['./title-stmt.component.scss'],
})
@register(TitleStmt)
export class TitleStmtComponent implements Highlightable,EditionlevelSusceptible, TextFlowSusceptible {
  @Input() data: TitleStmt;

  @Input() highlightData: HighlightData;
  @Input() itemsToHighlight: EntitiesSelectItem[];
  @Input() editionLevel: EditionLevelType;
  @Input()   textFlow: TextFlow;
}
