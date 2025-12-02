import { Component, inject, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FaConfig, FaIconLibrary} from '@fortawesome/angular-fontawesome';
import { fontAwesomeIcons } from './shared/font-awesome-icons';
import { Navbar } from './layout/navbar/navbar';
import { Footer } from './layout/footer/footer';

@Component({
  imports: [RouterModule, Navbar, Footer],
  selector: 'ecom-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App implements OnInit{
  
  private faIconsLibrary = inject(FaIconLibrary);
  private faConfig = inject(FaConfig);

  ngOnInit(): void {
    this.initFontAwesome();
  }
  initFontAwesome() {
    this.faConfig.defaultPrefix = 'far';
    this.faIconsLibrary.addIcons(...fontAwesomeIcons);
  }
  
}
