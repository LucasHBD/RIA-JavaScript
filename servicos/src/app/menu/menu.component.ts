import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Menubar } from 'primeng/menubar';
import { BadgeModule } from 'primeng/badge';
import { AvatarModule } from 'primeng/avatar';
import { InputTextModule } from 'primeng/inputtext';
import { Ripple } from 'primeng/ripple';
import { StyleClassModule } from 'primeng/styleclass';
import { CreateComponent } from '../create/create.component';
import { ListComponent } from '../list/list.component';
import { UpdateComponent } from '../update/update.component';
import { Router } from '@angular/router';




@Component({
  selector: 'app-menu',
  imports: [Menubar, BadgeModule, AvatarModule, InputTextModule, Ripple, CommonModule, StyleClassModule, CreateComponent, UpdateComponent, ListComponent],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent implements OnInit {
  items: MenuItem[] | undefined;

  constructor(private router: Router) {}

    ngOnInit() {
        this.items = [
            {
                label: 'Home',
                icon: 'pi pi-home',
            },
            {
                label: 'Funcionalidades',
                icon: 'pi pi-search',
                badge: '4',
                items: [
                    {
                        label: 'Inserir',
                        icon: 'pi pi-bolt',
                        command: () => {
                          this.router.navigate(["./create"]).then(() =>{
                            window.location.reload();
                          })
                        },
                    },
                    {
                        label: 'Listar',
                        icon: 'pi pi-server',
                        command: () => {
                          this.router.navigate(["./list"]).then(() =>{
                            window.location.reload();
                          })
                        },
                    },
                    {
                      label: 'Atualizar',
                      icon: 'pi pi-server',
                      command: () => {
                        this.router.navigate(["./update"]).then(() =>{
                          window.location.reload();
                        })
                      },
                    },
                    {
                        separator: true,
                    },
                    {
                        label: 'Deletar',
                        icon: 'pi pi-pencil',
                    },
                ],
            },
        ];
    }
}
