import { Component, Input } from '@angular/core';
import { MsDesc } from '../../models/evt-models';
import { register } from '../../services/component-register.service';
import { MsDescSectionComponent } from '../../ui-components/ms-desc-section/ms-desc-section.component';
import { ContentViewerComponent } from '../content-viewer/content-viewer.component';
import { MsIdentifierComponent } from '../ms-identifier/ms-identifier.component';
import { CommonModule } from '@angular/common';
import { MsContentsComponent } from '../ms-contents/ms-contents.component';
import { PhysDescComponent } from '../phys-desc/phys-desc.component';
import { HistoryComponent } from '../history/history.component';
import { AdditionalComponent } from '../additional/additional.component';
import { MsFragComponent } from '../ms-frag/ms-frag.component';
import { MsPartComponent } from '../ms-part/ms-part.component';

@Component({
  selector: 'evt-ms-desc',
  templateUrl: './ms-desc.component.html',
  styleUrls: [ './ms-desc.component.scss' ],
  standalone: true,

  imports: [
    MsDescSectionComponent,
    ContentViewerComponent,
    MsIdentifierComponent,
    CommonModule,
    MsContentsComponent,
    PhysDescComponent,
    HistoryComponent,
    AdditionalComponent,
    MsFragComponent,
    MsPartComponent,
  ]
})

@register(MsDesc)
export class MsDescComponent {
  @Input() data: MsDesc;
}
