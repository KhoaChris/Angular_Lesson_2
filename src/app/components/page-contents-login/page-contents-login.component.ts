import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-contents-login',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './page-contents-login.component.html',
  styleUrl: './page-contents-login.component.scss',
  changeDetection: ChangeDetectionStrategy.Default,
})
export class PageContentsLoginComponent {
  constructor(private router: Router) {}

  navToSignUp() {
    this.router.navigate(['/Signup']);
  }
}
