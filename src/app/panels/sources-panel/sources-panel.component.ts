import { Component } from '@angular/core';
import { PanelComponent } from '../../ui-components/panel/panel.component';

@Component({
  selector: 'evt-sources-panel',
  templateUrl: './sources-panel.component.html',
  styleUrls: [ './sources-panel.component.scss' ],
  standalone: true,
  imports: [
    PanelComponent
  ]
})
export class SourcesPanelComponent {
}
