import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [IonicModule, HttpClientModule, CommonModule],
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {
  fact: string = '';
  deviceInfo: string = '';

  constructor(private http: HttpClient) {}

  getRandomFact() {
    this.http.get<any>('https://uselessfacts.jsph.pl/random.json?language=en')
      .subscribe(data => {
        this.fact = data.text;
      });
  }

  getDeviceInfo() {
    this.deviceInfo = `Platform: ${navigator.platform}, UserAgent: ${navigator.userAgent}`;
  }
}
