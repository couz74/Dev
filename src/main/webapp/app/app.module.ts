import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { MariageArthurArianeSharedModule } from 'app/shared/shared.module';
import { MariageArthurArianeCoreModule } from 'app/core/core.module';
import { MariageArthurArianeAppRoutingModule } from './app-routing.module';
import { MariageArthurArianeHomeModule } from './home/home.module';
import { MariageArthurArianeEntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    MariageArthurArianeSharedModule,
    MariageArthurArianeCoreModule,
    MariageArthurArianeHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    MariageArthurArianeEntityModule,
    MariageArthurArianeAppRoutingModule,
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, FooterComponent],
  bootstrap: [MainComponent],
})
export class MariageArthurArianeAppModule {}
