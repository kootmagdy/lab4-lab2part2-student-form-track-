import { NgIf } from '@angular/common';
import { Component,Input } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-card-item',
  standalone: true,
  imports: [NgIf],
  templateUrl: './card-item.component.html',
  styleUrl: './card-item.component.css'
})
export class CardItemComponent {

  @Input() image!: string;
  @Input() productName!: string;
  @Input() price!: string;
  @Input() quantity!: number;
  @Input() description!: string;

}
