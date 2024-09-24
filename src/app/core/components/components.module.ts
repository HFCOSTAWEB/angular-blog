import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { BigCardComponent } from './big-card/big-card.component';
import { MenuTitleComponent } from './menu-title/menu-title.component';
import { SmallCardComponent } from './small-card/small-card.component';


@NgModule({
  declarations: [MenuBarComponent, BigCardComponent, MenuTitleComponent, SmallCardComponent],
  imports: [
    CommonModule
  ],
  exports: [MenuBarComponent, BigCardComponent, MenuTitleComponent, SmallCardComponent]
})
export class ComponentsModule { }
