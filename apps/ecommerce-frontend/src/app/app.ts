import { Component, inject, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FaConfig, FaIconLibrary, FaIconComponent } from '@fortawesome/angular-fontawesome';
import { fontAwesomeIcons } from './shared/font-awesome-icons';

@Component({
  imports: [RouterModule, FaIconComponent],
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
