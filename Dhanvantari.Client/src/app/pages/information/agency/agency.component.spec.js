"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var agency_component_1 = require("./agency.component");
describe('AgencyComponent', function () {
    var component;
    var fixture;
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [agency_component_1.AgencyComponent]
        });
        fixture = testing_1.TestBed.createComponent(agency_component_1.AgencyComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=agency.component.spec.js.map