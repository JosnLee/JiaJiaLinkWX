import {NgModule, ApplicationRef} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule, Http, RequestOptions} from '@angular/http';
import {FormsModule} from '@angular/forms';
import {GrowlModule, ConfirmDialogModule} from 'primeng/primeng';
import {AppComponent} from './app.component';



import {
    MainComponent

}from './main';
import {routing} from './app.routing';
import {HttpInterceptor, HttpInterceptorBackend, HttpFactory} from './http';
import {removeNgStyles, createNewHosts} from '@angularclass/hmr';
import '../styles/styles.scss';


@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        FormsModule,
        routing,
        GrowlModule,
        ConfirmDialogModule
    ],
    declarations: [
        AppComponent,
        MainComponent
    ],
    providers: [
        HttpInterceptorBackend, HttpInterceptor,
        {provide: Http, useFactory: HttpFactory, deps: [HttpInterceptorBackend, RequestOptions]},
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
    constructor(public appRef:ApplicationRef) {

    }

    hmrOnInit(store) {
        console.log('HMR store', store);
    }

    hmrOnDestroy(store) {
        let cmpLocation = this.appRef.components.map(cmp => cmp.location.nativeElement);
        // recreate elements
        store.disposeOldHosts = createNewHosts(cmpLocation);
        // remove styles
        removeNgStyles();
    }

    hmrAfterDestroy(store) {
        // display new elements
        store.disposeOldHosts();
        delete store.disposeOldHosts;
    }
}
