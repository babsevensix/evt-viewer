import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanelComponent } from '../../ui-components/panel/panel.component';

@Component({
  selector: 'evt-version-panel',
  templateUrl: './version-panel.component.html',
  styleUrls: ['./version-panel.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    PanelComponent
  ]
})
export class VersionPanelComponent {
  @Input() version: string;
  @Output() hide = new EventEmitter<boolean>();

  emitHide() {
    this.hide.emit(true);
  }

}
