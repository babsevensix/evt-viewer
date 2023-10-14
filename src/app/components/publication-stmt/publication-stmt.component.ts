import { Component, Input } from '@angular/core';
import { HighlightData, PublicationStmt } from '../../models/evt-models';
import { register } from '../../services/component-register.service';
import { EditionlevelSusceptible, Highlightable, TextFlowSusceptible } from '../components-mixins';
import { EditionLevelType, TextFlow } from '../../app.config';
import { EntitiesSelectItem } from '../entities-select/entities-select.component';

@Component({
  selector: 'evt-publication-stmt',
  templateUrl: './publication-stmt.component.html',
  styleUrls: ['./publication-stmt.component.scss'],
})
@register(PublicationStmt)
export class PublicationStmtComponent implements TextFlowSusceptible,Highlightable,EditionlevelSusceptible {
  @Input() data: PublicationStmt;
  @Input() textFlow: TextFlow;
  @Input() highlightData: HighlightData;
  @Input() itemsToHighlight: EntitiesSelectItem[];

  @Input() editionLevel: EditionLevelType;
}
