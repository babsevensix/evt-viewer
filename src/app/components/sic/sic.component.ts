import { Component, Input } from '@angular/core';
import { EditorialConventionDefaults } from 'src/app/services/editorial-conventions.service';

import { EditionLevelType, TextFlow } from 'src/app/app.config';
import { EditorialConventionLayoutData } from '../../directives/editorial-convention-layout.directive';
import { HighlightData, Sic } from '../../models/evt-models';
import { register } from '../../services/component-register.service';
import { EditionlevelSusceptible, Highlightable, TextFlowSusceptible } from '../components-mixins';
import { EntitiesSelectItem } from '../entities-select/entities-select.component';

export interface ISicComponent extends EditionlevelSusceptible, Highlightable, TextFlowSusceptible { }

@Component({
  selector: 'evt-sic',
  templateUrl: './sic.component.html',
  styleUrls: ['./sic.component.scss'],
})
@register(Sic)
export class SicComponent implements ISicComponent {
  @Input() textFlow: TextFlow;
  @Input() editionLevel: EditionLevelType;
  @Input() highlightData: HighlightData;
  @Input() itemsToHighlight: EntitiesSelectItem[];

  @Input() data: Sic;

  get editorialConventionData(): EditorialConventionLayoutData {
    return {
      name: 'sic',
      attributes: this.data?.attributes || {},
      editionLevel: this.editionLevel,
      defaultsKey: this.defaultsKey,
    };
  }

  get defaultsKey(): EditorialConventionDefaults {
    switch (this.data.sicType) {
      case 'crux':
        return 'sicCrux';
    }
  }
}
