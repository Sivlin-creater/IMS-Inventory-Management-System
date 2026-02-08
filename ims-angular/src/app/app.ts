import { ChangeDetectorRef, Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterOutlet} from '@angular/router';
import { Api } from './service/api';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
})

export class App implements AfterViewInit {
  readonly title = 'ims';
  showLogoutModal = false;
  isDarkTheme = false;

  private applyTheme(): void {
    const html = document.documentElement;
    if (this.isDarkTheme) {
      html.setAttribute('data-theme', 'dark');
    } else {
      html.removeAttribute('data-theme');
    }
  }

  private loadTheme(): void {
    const saved = localStorage.getItem('theme');
    this.isDarkTheme = saved === 'dark';
    this.applyTheme();
  }

  toggleTheme(): void {
    this.isDarkTheme = !this.isDarkTheme;
    try {
      localStorage.setItem('theme', this.isDarkTheme ? 'dark' : 'light');
    } catch (e) {
      // ignore storage errors
    }
    this.applyTheme();
    // ensure template updates immediately
    try { this.cdr.detectChanges(); } catch {}
    console.log('Theme toggled, dark=', this.isDarkTheme);
  }

  constructor(
    private api: Api,
    private router: Router,
    private cdr: ChangeDetectorRef
  ){}

  // initialize theme on startup
  ngAfterViewInit(): void {
    this.loadTheme();
    try { this.cdr.detectChanges(); } catch {}
  }

  isAuth(): boolean {
    return this.api.isAuthenticated();
  }

  isAdmin(): boolean {
    return this.api.isAdmin();
  }

  logOut(): void {
    this.showLogoutModal = true;
  }

  confirmLogout(): void {
    this.showLogoutModal = false;
    this.api.logout();
    this.router.navigate(['/login']);
    this.cdr.detectChanges();
  }

  cancelLogout(): void {
    this.showLogoutModal = false;
  }
}
