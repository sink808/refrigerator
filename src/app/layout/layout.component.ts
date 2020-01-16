import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  private name: string = this.route.snapshot.paramMap.get('name');
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
  }

}
