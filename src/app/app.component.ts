import { Component, OnInit } from '@angular/core';
import { Theme } from './shared/models/theme.model';
import { ThemeService } from './shared/services/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ClientApp';
  activeTheme: Theme;
  themes: Theme[] | undefined;

  constructor(private themeService: ThemeService) {
    this.themes = themeService.themesList;
    this.activeTheme = themeService.activeTheme.getValue();
    themeService.activeTheme.subscribe(theme => {
      this.activeTheme = theme;
    });
  }

  themeChange() {
    if (this.activeTheme?.name == 'colorfull') {
      this.themeService.activeTheme.next(this.themeService.themesList[1]);
    } else {
      this.themeService.activeTheme.next(this.themeService.themesList[0]);
    }

  }
}
