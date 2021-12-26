import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html'
})

export class HomePage implements OnInit {
  public folder: string;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    console.log("pasa home.page.ts");
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
  }

}
