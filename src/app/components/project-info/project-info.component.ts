import { Component } from '@angular/core';
import { first, tap } from 'rxjs/operators';
import { GenericElement } from 'src/app/models/evt-models';
import { EVTModelService } from '../../services/evt-model.service';
import { ContentViewerComponent } from '../content-viewer/content-viewer.component';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'evt-project-info',
  templateUrl: './project-info.component.html',
  styleUrls: [ './project-info.component.scss' ],
  standalone: true,

  imports: [
    ContentViewerComponent,
      CommonModule,
      TranslateModule,
  ]
})
export class ProjectInfoComponent {
  public projectInfo$ = this.evtModelService.projectInfo$.pipe(
    first(),
    tap((info) => this.openSection('fileDesc', info.fileDesc)),
  );

  public selectedSection: { key: string; content: GenericElement };

  constructor(
    private evtModelService: EVTModelService,
  ) { }

  openSection(key: string, content: GenericElement) {
    this.selectedSection = { key, content };
  }
}
