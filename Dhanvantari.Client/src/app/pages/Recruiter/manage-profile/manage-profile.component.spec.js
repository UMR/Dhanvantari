"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var manage_profile_component_1 = require("./manage-profile.component");
describe('ManageProfileComponent', function () {
    var component;
    var fixture;
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [manage_profile_component_1.ManageProfileComponent]
        });
        fixture = testing_1.TestBed.createComponent(manage_profile_component_1.ManageProfileComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=manage-profile.component.spec.js.map