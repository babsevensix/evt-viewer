import { Attribute, Component, Input } from '@angular/core';
import { EVTBtnClickEvent } from '../../ui-components/button/button.component';
import { PinboardService } from '../pinboard.service';
import { UiComponentsModule } from '../../ui-components/ui-components.module';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'evt-pinner',
    templateUrl: './pinner.component.html',
    styleUrls: [ './pinner.component.scss' ],
    standalone: true,
    imports: [
        CommonModule,
        UiComponentsModule,
        TranslateModule
    ]
})
export class PinnerComponent {
    @Input() item;
    @Input() additionalStyle: { [key: string]: string | number };

    constructor(
        @Attribute('pinType') public pinType: string,
        @Attribute('renderer') public renderer: string,
        private pinboard: PinboardService) {
    }

    isItemPinned() {
        return this.pinboard.isItemPinned(this.item);
    }

    togglePin(btnEvent: EVTBtnClickEvent) {
        btnEvent.event.stopPropagation();
        this.pinboard.toggleItem(this.item, { pinType: this.pinType, renderer: this.renderer });
    }
}
