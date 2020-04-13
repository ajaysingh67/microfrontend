import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmptyRouteComponent } from './empty-route/empty-route.component';
import { APP_BASE_HREF } from '@angular/common';
import { UnderWriterComponent } from './under-writer/under-writer.component';


const routes: Routes = [
   { path: '**', component: EmptyRouteComponent },
  // { path: 'under-writer', component: UnderWriterComponent },
  // { path: '', component: UnderWriterComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/' },
  ],
})
export class AppRoutingModule { }
