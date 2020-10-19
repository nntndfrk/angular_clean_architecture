import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {SharedModule} from './shared/shared.module';
import {DayRepository} from './core/domain/repository/day.repository';
import {DayDataRepositoryService} from './core/data/repository/day-data-repository.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    SharedModule,
  ],
  providers: [
    {provide: DayRepository, useClass: DayDataRepositoryService}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
