import { Component, Input } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'evt-ms-desc-section',
  templateUrl: './ms-desc-section.component.html',
  styleUrls: ['./ms-desc-section.component.scss'],
  standalone: true,
  imports:[
      TranslateModule,
      CommonModule,

  ]
})
export class MsDescSectionComponent {
  @Input() label: string;
  @Input() additionalClass: string;
  @Input() inlineLabel: boolean;
  @Input() nestedElement: boolean;
  @Input() underline: boolean;
}
