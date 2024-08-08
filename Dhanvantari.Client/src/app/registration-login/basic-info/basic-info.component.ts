import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../core/services/application/auth.service';


@Component({
  selector: 'basic-info',
  templateUrl: './basic-info.component.html',
  styleUrls: ['./basic-info.component.css']
})
export class BasicInfoComponent {
  public firstName: string = "";
  public lastName: string = "";
  public dateOfBirth: string = "";
  public mobile: string = "";
  public email: string = "";

  constructor(private router: Router) {
    
  }
  ngOnInit() { }

  onNextClick() {
    this.router.navigateByUrl("/upload-photo");
  }
}
