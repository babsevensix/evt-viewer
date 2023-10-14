import { Component, Input } from '@angular/core';
import { HighlightData, PhysDesc } from '../../models/evt-models';
import { register } from '../../services/component-register.service';
import { EditionlevelSusceptible, Highlightable, TextFlowSusceptible } from '../components-mixins';
import { EditionLevelType, TextFlow } from '../../app.config';
import { EntitiesSelectItem } from '../entities-select/entities-select.component';
import { MsDescSectionComponent } from '../../ui-components/ms-desc-section/ms-desc-section.component';
import { CommonModule } from '@angular/common';
import { ContentViewerComponent } from '../content-viewer/content-viewer.component';

@Component({
  selector: 'evt-phys-desc',
  templateUrl: './phys-desc.component.html',
  styleUrls: ['./phys-desc.component.scss'],
  standalone: true,
  imports: [
    MsDescSectionComponent,
    CommonModule,
    ContentViewerComponent,

  ]
})

@register(PhysDesc)
export class PhysDescComponent implements TextFlowSusceptible, EditionlevelSusceptible, Highlightable{
  @Input() data: PhysDesc;
  @Input() textFlow: TextFlow;
  @Input() editionLevel: EditionLevelType;
  @Input() highlightData: HighlightData;
  @Input() itemsToHighlight: EntitiesSelectItem[];
}
