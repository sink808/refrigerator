import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModelService } from '../services/model.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public name: string;
  constructor(private router: Router, private auth: ModelService) { }

  ngOnInit() {
  }

  public login(): void {
    if (this.name) {
      this.router.navigate([`/refrigerater/${this.name}`]);
    } else {
      alert('名稱請勿空白');
    }
  }

}
