import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicRoutingModule } from './public-routing.module';
import { AboutComponent } from './about/about.component';
import { FaqComponent } from './faq/faq.component';

@NgModule({
  declarations: [AboutComponent, FaqComponent],
  imports: [CommonModule, PublicRoutingModule],
})
export class PublicModule {}
