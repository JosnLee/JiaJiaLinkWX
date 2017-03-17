import {RouterModule, Routes} from '@angular/router';







import { MainComponent} from './main';





// 定义常量 嵌套自路由
const appChildRoutes:Routes = <Routes>[];

const routes:Routes = <Routes>[
    {path: '', component: MainComponent}
];

export const routing = RouterModule.forRoot(routes);
