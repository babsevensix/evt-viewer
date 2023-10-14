import { Component, Input } from '@angular/core';
import { MsPart } from '../../models/evt-models';
import { register } from '../../services/component-register.service';
import { CommonModule } from '@angular/common';
import { MsDescSectionComponent } from '../../ui-components/ms-desc-section/ms-desc-section.component';
import { ContentViewerComponent } from '../content-viewer/content-viewer.component';
import { MsIdentifierComponent } from '../ms-identifier/ms-identifier.component';
import { MsContentsComponent } from '../ms-contents/ms-contents.component';
import { PhysDescComponent } from '../phys-desc/phys-desc.component';
import { HistoryComponent } from '../history/history.component';
import { AdditionalComponent } from '../additional/additional.component';

@Component({
  selector: 'evt-ms-part',
  templateUrl: './ms-part.component.html',
  styleUrls: ['./ms-part.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    MsDescSectionComponent,
    ContentViewerComponent,
    MsIdentifierComponent,
    MsContentsComponent,
    PhysDescComponent,
    HistoryComponent,
    AdditionalComponent,
  ]
})

@register(MsPart)
export class MsPartComponent {
  @Input() data: MsPart;
}
