import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { InputTextModule } from 'primeng/inputtext';
import { SelectModule } from 'primeng/select';
import { InputNumberModule } from 'primeng/inputnumber';

import { CommonModule } from '@angular/common';

interface City {
  name: string;
  code: string;
}

@Component({
  selector: 'app-create',
  imports: [CommonModule, FormsModule, InputGroupAddonModule, InputGroupModule, InputTextModule, SelectModule, InputNumberModule],
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateComponent {
  text1: string | undefined;

    text2: string | undefined;

    number: string | undefined;

    selectedCity: City | undefined;

    cities: City[] = [
        { name: 'New York', code: 'NY' },
        { name: 'Rome', code: 'RM' },
        { name: 'London', code: 'LDN' },
        { name: 'Istanbul', code: 'IST' },
        { name: 'Paris', code: 'PRS' },
    ];
}
