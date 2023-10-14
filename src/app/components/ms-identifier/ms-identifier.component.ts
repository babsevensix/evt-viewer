import { Component, Input } from '@angular/core';
import { HighlightData, MsIdentifier } from '../../models/evt-models';
import { register } from '../../services/component-register.service';
import { EditionlevelSusceptible, Highlightable, TextFlowSusceptible } from '../components-mixins';
import { EditionLevelType, TextFlow } from '../../app.config';
import { EntitiesSelectItem } from '../entities-select/entities-select.component';
import { MsDescSectionComponent } from '../../ui-components/ms-desc-section/ms-desc-section.component';
import { ContentViewerComponent } from '../content-viewer/content-viewer.component';
import { IdentifierComponent } from '../identifier/identifier.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'evt-ms-identifier',
  templateUrl: './ms-identifier.component.html',
  styleUrls: ['./ms-identifier.component.scss'],
  standalone: true,
  imports: [
    MsDescSectionComponent,
    ContentViewerComponent,
    IdentifierComponent,
    CommonModule,
  ]
})

@register(MsIdentifier)
export class MsIdentifierComponent  implements  TextFlowSusceptible,Highlightable,EditionlevelSusceptible{
  @Input() data: MsIdentifier;
  @Input() editionLevel: EditionLevelType;
  @Input() textFlow: TextFlow;
  @Input() highlightData: HighlightData;
  @Input() itemsToHighlight: EntitiesSelectItem[];
}
