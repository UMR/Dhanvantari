"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var contact_info_component_1 = require("./contact-info.component");
describe('ContactInfoComponent', function () {
    var component;
    var fixture;
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [contact_info_component_1.ContactInfoComponent]
        });
        fixture = testing_1.TestBed.createComponent(contact_info_component_1.ContactInfoComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=contact-info.component.spec.js.map