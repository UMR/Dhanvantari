"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var applicant_type_component_1 = require("./applicant-type.component");
describe('ApplicantTypeComponent', function () {
    var component;
    var fixture;
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [applicant_type_component_1.ApplicantTypeComponent]
        });
        fixture = testing_1.TestBed.createComponent(applicant_type_component_1.ApplicantTypeComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=applicant-type.component.spec.js.map