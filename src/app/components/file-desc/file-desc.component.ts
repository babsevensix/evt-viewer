import { Component, Input } from '@angular/core';
import { FileDesc, HighlightData } from 'src/app/models/evt-models';
import { register } from 'src/app/services/component-register.service';
import { EditionlevelSusceptible, Highlightable, TextFlowSusceptible } from '../components-mixins';
import { EntitiesSelectItem } from '../entities-select/entities-select.component';
import { EditionLevelType, TextFlow } from '../../app.config';

@Component({
  selector: 'evt-file-desc',
  templateUrl: './file-desc.component.html',
  styleUrls: ['./file-desc.component.scss'],
})
@register(FileDesc)
export class FileDescComponent implements Highlightable,EditionlevelSusceptible, TextFlowSusceptible {
  @Input() data: FileDesc;

  @Input() highlightData: HighlightData;
  @Input() itemsToHighlight: EntitiesSelectItem[];
  @Input() editionLevel: EditionLevelType;
  @Input()   textFlow: TextFlow;
}
