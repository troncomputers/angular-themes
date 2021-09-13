import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Theme } from '../models/theme.model';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  public themesList = [
    new Theme('wiosna', '#3fb577', '#3f7eb5', '#b56a3f', '#5cc08b', '#5c91c0', '#c0805c', '#E8F6EF'),
    new Theme('zima', '#515151', '#6b5656', '#ec5757', '#6b6b6b', '#816f6f', '#ef7070', '#E8F6EF'),
    new Theme('lato', '#e18b1e', '#e1bd1e', '#e12a1e', '#e69c40', '#e6c740', '#e64a40', '#E8F6EF')
  ]

  public activeTheme = new BehaviorSubject<Theme>(this.themesList[0]);

  constructor() { }
}
