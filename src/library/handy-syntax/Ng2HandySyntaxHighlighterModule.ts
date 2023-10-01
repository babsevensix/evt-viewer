import { NgModule } from '@angular/core';
import { HandySyntaxHighlighterComponent } from './component/handy-syntax-highlighter.component';
import { HighlighterDirective } from './directive/highlighter.directive';

@NgModule({
  declarations: [HighlighterDirective, HandySyntaxHighlighterComponent],
  exports: [HandySyntaxHighlighterComponent]
})

export class Ng2HandySyntaxHighlighterModule {

}