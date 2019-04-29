import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

// Components
import { AppComponent, AppDialogComponent } from './app.component';
import { MapaComponent } from './components/mapa/mapa.component';

// Modules
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule, MatFormFieldModule } from '@angular/material';
import { MatInputModule } from '@angular/material/input';
import { AgmCoreModule } from '@agm/core';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HttpClientModule } from '@angular/common/http';
import { MatListModule } from '@angular/material/list';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    AppDialogComponent,
    MapaComponent,
    SearchBarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatToolbarModule,
    MatListModule,
    MatDialogModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBvVwA_0U-j-LktaHM1_WG881p27fewF48'
    })
  ],
  entryComponents: [
    AppDialogComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
