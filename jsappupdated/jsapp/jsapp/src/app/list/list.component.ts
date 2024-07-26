import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpServiceService } from '../http-service.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  listForm: FormGroup;
 @Input() listData: any = [];
  selected: number | null = null;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private httpService: HttpServiceService
  ) {
    this.listForm = this.formBuilder.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      mobileNo: ['', [Validators.required]],
      gender: ['', [Validators.required]],
      email: ['', [Validators.required]],
      jobSeeker: ['', [Validators.required]],
      currentAddress: ['', [Validators.required]],
      city: ['', [Validators.required]],
      pincode: ['', [Validators.required]],
      password: ['', [Validators.required]],
      resume: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
    this.list();
}
  list(): void {
    this.httpService.list().subscribe((response: any) => {
      console.log(response);
      if (response) {
        this.listData = response;
      }
    });
  }

  onSelectionChange(index: number): void {
    this.selected = index;
    // Update the URL with the selected index
    this.router.navigate([], {
      queryParams: { selected: index + 1 }
    });
  }
}
