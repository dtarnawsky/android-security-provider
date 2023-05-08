import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CapacitorSecurityProvider, SecurityProviderStatus } from '@capacitor-community/security-provider';
import { Capacitor } from '@capacitor/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule],
})
export class HomePage implements OnInit {
  status: string = 'Unknown';
  constructor() { }

  async ngOnInit() {
    if (Capacitor.getPlatform() !== 'android') {
      this.status = 'Try on an Android device';
      return;
    }
      console.log('CapacitorSecurityProvider.installIfNeeded');
      const result = await CapacitorSecurityProvider.installIfNeeded();
      console.log(result);
      this.status = result.status;
      if (result.status !== SecurityProviderStatus.Success) {
        alert('Play Services might be disabled / invalid.');
      }
  }
}
