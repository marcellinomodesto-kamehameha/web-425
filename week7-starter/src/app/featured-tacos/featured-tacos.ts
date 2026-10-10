
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface Taco {
  name: string;
  description: string;
  price: number;
  label: 'Spicy' | 'Popular' | 'New';
  isChefPick: boolean;
}

@Component({
  selector: 'app-featured-tacos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './featured-tacos.html',
  styleUrl: './featured-tacos.css'
})
export class FeaturedTacosComponent {
  featuredTacos: Taco[] = [
    {
      name: 'Classic Carnitas',
      description: 'Slow-cooked pork with cilantro, onion, and salsa verde.',
      price: 3.50,
      label: 'Popular',
      isChefPick: true
    },
    {
      name: 'Spicy Chicken',
      description: 'Grilled chicken with chipotle sauce and jalapeños.',
      price: 3.75,
      label: 'Spicy',
      isChefPick: false
    },
    {
      name: 'Baja Fish',
      description: 'Crispy fish with fresh slaw and a squeeze of lime.',
      price: 4.25,
      label: 'Popular',
      isChefPick: false
    },
    {
      name: 'Street Corn',
      description: 'Roasted corn, cotija cheese, avocado, and smoky spices.',
      price: 3.25,
      label: 'New',
      isChefPick: false
    }
  ];

  selectedLabel: 'All' | Taco['label'] = 'All';

  get filteredTacos(): Taco[] {
    if (this.selectedLabel === 'All') {
      return this.featuredTacos;
    }

    return this.featuredTacos.filter(
      taco => taco.label === this.selectedLabel
    );
  }

  setFilter(label: 'All' | Taco['label']): void {
    this.selectedLabel = label;
  }
}
