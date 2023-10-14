import { Component, Input } from '@angular/core';
import { HighlightData, MsContents } from '../../models/evt-models';
import { register } from '../../services/component-register.service';
import { EditionlevelSusceptible, Highlightable, TextFlowSusceptible } from '../components-mixins';
import { EntitiesSelectItem } from '../entities-select/entities-select.component';
import { EditionLevelType, TextFlow } from '../../app.config';
import { MsDescSectionComponent } from '../../ui-components/ms-desc-section/ms-desc-section.component';
import { CommonModule } from '@angular/common';
import { ContentViewerComponent } from '../content-viewer/content-viewer.component';
import { MsItemComponent } from '../ms-item/ms-item.component';

@Component({
  selector: 'evt-ms-contents',
  templateUrl: './ms-contents.component.html',
  styleUrls: ['./ms-contents.component.scss'],
  standalone: true,
  imports: [
    MsDescSectionComponent,
    CommonModule,
    ContentViewerComponent,
    MsItemComponent,

  ]
})

@register(MsContents)
export class MsContentsComponent implements Highlightable,EditionlevelSusceptible, TextFlowSusceptible{
  @Input() data: MsContents;

  @Input() highlightData: HighlightData;
  @Input() itemsToHighlight: EntitiesSelectItem[];
  @Input() editionLevel: EditionLevelType;
  @Input()   textFlow: TextFlow;
}
