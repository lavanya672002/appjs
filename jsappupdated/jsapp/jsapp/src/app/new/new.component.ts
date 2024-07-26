import { Component } from '@angular/core';
import { HttpServiceService } from '../http-service.service';
import { every } from 'rxjs';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent {
  listData: any = [];
  selected: number | null = null;

  constructor(
    private httpService: HttpServiceService
  ) {

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
  getValueChange($event:any){
    if(event){
      this.list()
    }

  }
}
