import { __decorate } from "tslib";
import { Component } from '@angular/core';
let AppComponent = class AppComponent {
    constructor() {
        this.appPages = [
            { title: 'Home', url: 'home', icon: 'mail' },
            { title: 'Outbox', url: '/folder/Outbox', icon: 'paper-plane' },
            { title: 'Favorites', url: '/folder/Favorites', icon: 'heart' },
            { title: 'Archived', url: '/folder/Archived', icon: 'archive' },
            { title: 'Trash', url: '/folder/Trash', icon: 'trash' },
            { title: 'Spam', url: '/folder/Spam', icon: 'warning' },
        ];
        this.labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
    }
};
AppComponent = __decorate([
    Component({
        selector: 'app-root',
        templateUrl: 'app.component.html',
    })
], AppComponent);
export { AppComponent };
//# sourceMappingURL=app.component.js.map