import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { PrimeNG } from 'primeng/config'
import { CreateComponent } from '../app/create/create.component';
import { ListComponent } from '../app/list/list.component';
import { UpdateComponent } from '../app/update/update.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MenuComponent, CreateComponent, UpdateComponent, ListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'servicos';

  constructor(private primeng: PrimeNG) {}

    ngOnInit() {
        this.primeng.ripple.set(true);
    }

    
}
