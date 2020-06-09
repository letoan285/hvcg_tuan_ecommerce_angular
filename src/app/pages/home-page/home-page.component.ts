import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor() {
    // console.log('constructor Home run');
  }
// count = 1;
  // appName = 'Home page';



  
  // ngDoCheck(){
  //   console.log('ngDoCheck Home run');
  // }

  // ngAfterContentInit(){
  //   console.log('ngAfterContentInit Home run');
  // }

  // ngAfterContentChecked(){
  //   console.log('ngAfterContentChecked Home run');
  // }
  ngOnInit(): void {
    console.log('ngOnInit Home run');
  }
  // ngAfterViewInit(){
  //   console.log('ngAfterViewInit Home run');
  // }
  // ngAfterViewChecked(){
  //   console.log('ngAfterViewChecked Home run');
  //   setTimeout(() => {
  //     this.count ++;
  //     this.appName = 'appName' + this.count; 
  //     console.log(this.count);
  //   }, 2000)
  // }
  ngOnDestroy(){
    console.log('ngOnDestroy run ko Home run');
  }

}
