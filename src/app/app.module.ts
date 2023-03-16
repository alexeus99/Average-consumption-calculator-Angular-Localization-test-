import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './pages/main/main.component';
import { OptionSelectorComponent } from './pages/option-selector/option-selector.component';
import { MpgCalculatorComponent } from './pages/mpg-calculator/mpg-calculator.component';
import { LkmCalculatorComponent } from './pages/lkm-calculator/lkm-calculator.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    OptionSelectorComponent,
    MpgCalculatorComponent,
    LkmCalculatorComponent,
    
  ],
  imports: [BrowserModule, AppRoutingModule,FormsModule,ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
