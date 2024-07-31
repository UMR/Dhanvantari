"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var institution_type_component_1 = require("./institution-type.component");
describe('InstitutionTypeComponent', function () {
    var component;
    var fixture;
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [institution_type_component_1.InstitutionTypeComponent]
        });
        fixture = testing_1.TestBed.createComponent(institution_type_component_1.InstitutionTypeComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=institution-type.component.spec.js.map