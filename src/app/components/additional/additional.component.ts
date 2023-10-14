import { Component, Input } from '@angular/core';
import { Additional } from '../../models/evt-models';
import { register } from '../../services/component-register.service';
import { MsDescSectionComponent } from '../../ui-components/ms-desc-section/ms-desc-section.component';
import { CommonModule } from '@angular/common';
import { ContentViewerComponent } from '../content-viewer/content-viewer.component';

@Component({
  selector: 'evt-additional',
  templateUrl: './additional.component.html',
  styleUrls: ['./additional.component.scss'],
  standalone: true,
  imports: [
    MsDescSectionComponent,
    CommonModule,
    ContentViewerComponent,

  ]
})

@register(Additional)
export class AdditionalComponent {
  @Input() data: Additional;

}
