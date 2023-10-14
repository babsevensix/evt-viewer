import { Component, Input } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'evt-header-section',
  templateUrl: './header-section.component.html',
  styleUrls: ['./header-section.component.scss'],
  standalone: true,
  imports:[
      TranslateModule,
      CommonModule,
  ]
})
export class HeaderSectionComponent {
  @Input() label: string;
  @Input() additionalClass: string;
  @Input() inlineLabel: boolean;
}
