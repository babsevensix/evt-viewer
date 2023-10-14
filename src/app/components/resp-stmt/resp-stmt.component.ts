import { Component, Input } from '@angular/core';
import { HighlightData, Resp, RespStmt } from '../../models/evt-models';
import { register } from '../../services/component-register.service';
import { EditionlevelSusceptible, Highlightable, TextFlowSusceptible } from '../components-mixins';
import { EditionLevelType, TextFlow } from '../../app.config';
import { EntitiesSelectItem } from '../entities-select/entities-select.component';

@Component({
  selector: 'evt-resp-stmt',
  templateUrl: './resp-stmt.component.html',
  styleUrls: ['./resp-stmt.component.scss'],
})
@register(RespStmt)
export class RespStmtComponent implements TextFlowSusceptible,Highlightable,EditionlevelSusceptible {
  @Input() data: RespStmt;
  @Input() textFlow: TextFlow;
  openNormalizedResp(resp: Resp) {
    if (resp.normalizedResp) {
      window.open(resp.normalizedResp, '_blank');
    }
  }

  @Input() highlightData: HighlightData;
  @Input() itemsToHighlight: EntitiesSelectItem[];
  @Input() editionLevel: EditionLevelType;
}
