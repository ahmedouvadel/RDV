import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as L from 'leaflet';


@Component({
  selector: 'app-map-component',
  templateUrl: './map-component.component.html',
  styleUrls: ['./map-component.component.css']
})
export class MapComponentComponent implements OnInit{
  private map: any;

  constructor(private router: Router){}

  ngOnInit(): void {
    this.initMap();
    this.getUserLocation();
  }

  private initMap(): void {
    this.map = L.map('map').setView([51.505, -0.09], 13); // Initial position and zoom level

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
    }).addTo(this.map);
  }

  private getUserLocation(): void {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const userLat = position.coords.latitude;
          const userLng = position.coords.longitude;

          // Place a marker at the user's location
          L.marker([userLat, userLng]).addTo(this.map);

          // Optionally, you can center the map on the user's location
          this.map.setView([userLat, userLng], 13);
        },
        (error) => {
          console.error(`Error getting location: ${error.message}`);
        }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  }

Goback() {
  this.router.navigate(['/serviceAgenceDiv'])
}

}
