import { Component, Input } from '@angular/core';
import { MsFrag } from '../../models/evt-models';
import { register } from '../../services/component-register.service';
import { MsDescSectionComponent } from '../../ui-components/ms-desc-section/ms-desc-section.component';
import { ContentViewerComponent } from '../content-viewer/content-viewer.component';
import { MsIdentifierComponent } from '../ms-identifier/ms-identifier.component';
import { IdentifierComponent } from '../identifier/identifier.component';
import { MsContentsComponent } from '../ms-contents/ms-contents.component';
import { PhysDescComponent } from '../phys-desc/phys-desc.component';
import { HistoryComponent } from '../history/history.component';
import { AdditionalComponent } from '../additional/additional.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'evt-ms-frag',
  templateUrl: './ms-frag.component.html',
  styleUrls: ['./ms-frag.component.scss'],
  standalone: true,
  imports: [
    MsDescSectionComponent,
    ContentViewerComponent,
    MsIdentifierComponent,
    IdentifierComponent,
    MsContentsComponent,
    PhysDescComponent,
    HistoryComponent,
    AdditionalComponent,
    CommonModule,
  ],
})

@register(MsFrag)
export class MsFragComponent {
  @Input() data: MsFrag;
}
