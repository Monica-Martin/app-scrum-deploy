import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../models/product.model';
import { ProductItemComponent } from '../product-item/product-item.component';

@Component({
  selector: 'app-catalogo-hw',
  standalone: true,
  imports: [CommonModule, ProductItemComponent],
  templateUrl: './catalogo-hw.component.html',
  styleUrls: ['./catalogo-hw.component.css']
})
export class CatalogoHWComponent {
  products: Product[] = [
    new Product(1, 'Calabaza', '/assets/images/calabaza.jpg', 12.50, true),
    new Product(2, 'Máscara', '/assets/images/mascara.jpg', 19.99, true),
    new Product(3, 'Guantes', '/assets/images/guantes.jpg', 6.95, false),
    new Product(4, 'Murciélagos de decoración', '/assets/images/murcielagos.jpg', 4.50, true),
  ];

  onBuy(product: Product) {
    alert(`Has comprado: ${product.name} — €${product.price.toFixed(2)}`);
  }
}
