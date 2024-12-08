import { Routes } from '@angular/router';
import { LabourComponent } from './labour/labour.component';
import { AddLabourComponent } from './add-labour/add-labour.component';

export const routes: Routes = [
    { path: '', component: LabourComponent },
    { path: 'add-labour', component: AddLabourComponent },
    { path: 'add-labour/:id', component: AddLabourComponent },
];
