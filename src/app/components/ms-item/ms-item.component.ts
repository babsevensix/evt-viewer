import { Component, Input } from '@angular/core';
import { MsItem } from '../../models/evt-models';
import { register } from '../../services/component-register.service';
import { CommonModule } from '@angular/common';
import { ContentViewerComponent } from '../content-viewer/content-viewer.component';
import { MsDescSectionComponent } from '../../ui-components/ms-desc-section/ms-desc-section.component';

@Component({
  selector: 'evt-ms-item',
  templateUrl: './ms-item.component.html',
  styleUrls: ['./ms-item.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    ContentViewerComponent,
    MsDescSectionComponent,
  ]
})

@register(MsItem)
export class MsItemComponent {
  @Input() data: MsItem;
  @Input() nested1: boolean;
  @Input() nested2: boolean;
}
