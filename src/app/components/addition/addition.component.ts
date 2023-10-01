import { Component, Input } from '@angular/core';

import { EditionLevelType, TextFlow } from 'src/app/app.config';
import { EditorialConventionLayoutData } from '../../directives/editorial-convention-layout.directive';
import { Addition, HighlightData } from '../../models/evt-models';
import { register } from '../../services/component-register.service';
import { EditorialConventionDefaults } from '../../services/editorial-conventions.service';
import { EditionlevelSusceptible, Highlightable, TextFlowSusceptible } from '../components-mixins';
import { EntitiesSelectItem } from '../entities-select/entities-select.component';

export interface IAdditionComponent extends EditionlevelSusceptible, Highlightable, TextFlowSusceptible { }

@register(Addition)
@Component({
  selector: 'evt-addition',
  templateUrl: './addition.component.html',
  styleUrls: ['./addition.component.scss'],
})
export class AdditionComponent implements IAdditionComponent {
  @Input() editionLevel: EditionLevelType;
  @Input() highlightData: HighlightData;
  @Input() itemsToHighlight: EntitiesSelectItem[];
  @Input() textFlow: TextFlow;
  @Input() data: Addition;

  get editorialConventionData(): EditorialConventionLayoutData {
    return {
      name: 'add',
      attributes: this.data.attributes,
      editionLevel: this.editionLevel,
      defaultsKey: this._getDefaultLayoutsKeys(),
    };
  }

  private _getDefaultLayoutsKeys(): EditorialConventionDefaults {
    switch (this.data.place) {
      case 'above':
      case 'sup':
        return 'additionAbove';
      case 'below':
      case 'under':
      case 'sub':
        return 'additionBelow';
      case 'end':
      case 'inline':
      case 'inspace':
        return 'additionInline';
      case 'left':
        return 'additionLeft';
      case 'right':
        return 'additionRight';
      default:
        return 'addition';
    }
  }
}
