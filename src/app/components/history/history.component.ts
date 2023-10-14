import { Component, Input } from '@angular/core';
import { History } from '../../models/evt-models';
import { register } from '../../services/component-register.service';
import { MsDescSectionComponent } from '../../ui-components/ms-desc-section/ms-desc-section.component';
import { ContentViewerComponent } from '../content-viewer/content-viewer.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'evt-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss'],
  standalone: true,
  imports: [
    MsDescSectionComponent,
    ContentViewerComponent,
      CommonModule,

  ]
})

@register(History)
export class HistoryComponent {
  @Input() data: History;

}
