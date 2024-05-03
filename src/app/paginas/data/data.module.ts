import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { DataPageRoutingModule } from './data-routing.module';

import { DataPage } from './data.page';
import { ComponentesModule } from 'src/app/componentes/componentes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DataPageRoutingModule,
    ComponentesModule
  ],
  declarations: [DataPage]
})
export class DataPageModule {}
