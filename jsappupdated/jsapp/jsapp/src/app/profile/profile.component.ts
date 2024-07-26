import { ProfileApiService } from './../profile.service';
import { Component,EventEmitter,OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { HttpServiceService } from '../http-service.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{
  @Output() onUserCreation = new EventEmitter;
  userProfile: any    // private router: ActivatedRoute,
   profileForm: FormGroup
  listData:any;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    // private router: ActivatedRoute,
    private ProfileService: ProfileApiService,
    private httpService:HttpServiceService,
    private formBuilder:  FormBuilder
  ) {
    this.profileForm = this.formBuilder.group({
      firstName: ['', [Validators.required,]],
      lastName: ['', [Validators.required]],
      mobileNo: ['', [Validators.required,Validators.pattern('^[0-9]{10}$')]],
      gender: ['', [Validators.required]],
      email:['', [Validators.required,Validators.email]],
      jobSeeker: ['', [Validators.required]],
      currentAddress: ['', [Validators.required]],
      city: ['', [Validators.required]],
      pincode: ['', [Validators.required,Validators.pattern('^[0-9]{6}$')]],
      password: ['', [Validators.required,Validators.pattern('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$')]],
      resume:['', [Validators.required]],
    })
  }

  ngOnInit(): void {
    this.list();
    const userId = this.route.snapshot.paramMap.get('userId'); // Example: Get userId from route params

  if(userId){
    this.ProfileService.getProfileData('userId').subscribe(
      (data) => {
        this.userProfile = data;
      },
      (error)=> {
        console.log('failed to create the profile');

      }
    );
  }
  }


submit(){
   if(this.profileForm.invalid) {
    return alert('form is invalid')
   }
   const payload = this.profileForm.value;
   console.log(payload);
   this.httpService.createUser(payload).subscribe(response=>{
    if(response){
      // this.router.navigate('/')
      // console.warn(response.msg)
      console.log(response)
      // this.router.navigate(['./new'])
      this.onUserCreation.emit()
      this.list();
    }
   })

   //call api


}
list(): void {
  this.httpService.list().subscribe((response: any) => {
    console.log(response);
    if (response) {
      this.listData = response;
      this.httpService.setData(response);
    }
  });
}
}
