import { Component, Input } from '@angular/core';
import { EditionLevelType, TextFlow } from 'src/app/app.config';
import { HighlightData, Text } from '../../models/evt-models';
import { register } from '../../services/component-register.service';
import { EditionlevelSusceptible, Highlightable, TextFlowSusceptible } from '../components-mixins';
import { EntitiesSelectItem } from '../entities-select/entities-select.component';

@Component({
  selector: 'evt-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.scss'],
})
@register(Text)
export class TextComponent implements TextFlowSusceptible, EditionlevelSusceptible, Highlightable {
  @Input() highlightData: HighlightData;
  @Input() itemsToHighlight: EntitiesSelectItem[];
  @Input() data: Text;
  @Input() textFlow: TextFlow;
  @Input() editionLevel: EditionLevelType;
}
