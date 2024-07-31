import { RouterModule }  from '@angular/router';
import { PageNotFoundComponent } from './page-not-found.component';

export const pageNotFoundRoutes = RouterModule.forChild([  
         {
            path: '',
            children:
            [
                {
                    path: '',
                    component: PageNotFoundComponent
                }
            ]
        }
]);
