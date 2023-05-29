import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { TrendingSubjectsComponent } from '../app/components/trending-subjects/trending-subjects.component';
import { HomeComponent } from '../app/components/home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgxUiLoaderHttpModule, NgxUiLoaderModule } from "ngx-ui-loader";
import { NgHttpCachingModule, NgHttpCachingConfig, NgHttpCachingStrategy } from 'ng-http-caching';


const ngHttpCachingConfig: NgHttpCachingConfig = {
  lifetime: 1000 * 60, // cache expire after 60 seconds,
  allowedMethod: ['GET', 'HEAD'],
  cacheStrategy: NgHttpCachingStrategy.ALLOW_ALL,
};
@NgModule({
  declarations: [AppComponent, TrendingSubjectsComponent, HomeComponent],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    NgxUiLoaderModule,
    NgxUiLoaderHttpModule,
    NgHttpCachingModule.forRoot(ngHttpCachingConfig),
    
    
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
