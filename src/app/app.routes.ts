import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Contact } from './contact/contact';
import { Careers } from './careers/careers';
import { Early } from './early/early';
import { InternshipDetail } from './internship-detail/internship-detail';
import { ApplyForm } from './apply-form/apply-form';
import { GraduateDetail } from './graduate-detail/graduate-detail';
import { GraduateApply } from './graduate-apply/graduate-apply';
import { ApprenticeshipDetail } from './apprenticeship-detail/apprenticeship-detail';
import { ApprenticeshipApply } from './apprenticeship-apply/apprenticeship-apply';
import { ExperiencedDetail } from './experienced-detail/experienced-detail';
import { InnovationArchitecture } from './innovation-architecture/innovation-architecture';

export const routes: Routes = [
    { path: '', component: Home },
    { path: 'contact', component: Contact },
    {path: 'innovation-architecture',component:InnovationArchitecture },
    { path: 'careers', component: Careers },
    { path: 'early', component: Early },
    { path: 'category/internships', component: InternshipDetail },
    { path: 'category/graduates', component: GraduateDetail },
    { path: 'category/apprenticeships', component: ApprenticeshipDetail },
    { path: 'category/experienced', component: ExperiencedDetail },
    { path: 'category/:id', component: Early },
    { path: 'apply/internships', component: ApplyForm },
    { path: 'apply/graduates', component: GraduateApply },
    { path: 'apply/apprenticeships', component: ApprenticeshipApply },

];
