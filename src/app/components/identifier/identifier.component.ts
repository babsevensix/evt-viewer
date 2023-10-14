import { Component, Input } from '@angular/core';
import { Identifier } from '../../models/evt-models';
import { register } from '../../services/component-register.service';
import { CommonModule } from '@angular/common';
import { MsDescSectionComponent } from '../../ui-components/ms-desc-section/ms-desc-section.component';
import { ContentViewerComponent } from '../content-viewer/content-viewer.component';

@Component({
  selector: 'evt-identifier',
  templateUrl: './identifier.component.html',
  styleUrls: ['./identifier.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    MsDescSectionComponent,
    ContentViewerComponent,

  ]
})

@register(Identifier)
export class IdentifierComponent {
  @Input() data: Identifier;
  @Input() listClass: boolean;
}
