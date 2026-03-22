import { Routes } from '@angular/router';
// Import your specific .ts files here
import { HomeComponent } from './home/home'; 
import { DogOwnersComponent } from './dog-owners/dog-owners';
import { CatOwnersComponent } from './cat-owners/cat-owners';
import { SmallAnimalsComponent } from './small-animals/small-animals';
import { ConsultComponent } from './consult/consult';
import { PatientPortalComponent } from './patient-portal/patient-portal';
import { TestimonialsComponent } from './testimonials/testimonials';
import { AboutUsComponent } from './about-us/about-us';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'dog-owners', component: DogOwnersComponent },
  { path: 'cat-owners', component: CatOwnersComponent },
  { path: 'small-animals', component: SmallAnimalsComponent },
  { path: 'consult', component: ConsultComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'testimonials', component: TestimonialsComponent },
  { path: 'patient-portal', component: PatientPortalComponent }
];