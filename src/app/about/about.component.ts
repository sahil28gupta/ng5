import { Component, OnInit } from '@angular/core';
//To take the input values import librray
import { ActivatedRoute} from '@angular/router' 
import { Router } from '@angular/router'

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
   // reate instance of acivatedrote
  constructor(private route:ActivatedRoute,private router:Router) { 
    // this.route.params.subscribe(res => console.log(res.id));
    console.log(this.route.snapshot.params.id);
    console.log(this.route.snapshot.params.whatever);

    
  }
  ngOnInit() {
  }

  sendmehome(){
    this.router.navigate(['']);
  }
}
