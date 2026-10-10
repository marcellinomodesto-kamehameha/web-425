
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FeaturedTacosComponent } from './featured-tacos';

describe('FeaturedTacosComponent', () => {
  let component: FeaturedTacosComponent;
  let fixture: ComponentFixture<FeaturedTacosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeaturedTacosComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(FeaturedTacosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should display at least four tacos with their required details', () => {
    const cards: HTMLElement[] = Array.from(
      fixture.nativeElement.querySelectorAll('.taco-card')
    );

    expect(cards.length).toBeGreaterThanOrEqual(4);

    const pageText = fixture.nativeElement.textContent as string;

    expect(pageText).toContain('Classic Carnitas');
    expect(pageText).toContain('Slow-cooked pork');
    expect(pageText).toContain('3.50');
    expect(pageText).toContain('Popular');
    expect(pageText).toContain('Spicy Chicken');
    expect(pageText).toContain('Baja Fish');
    expect(pageText).toContain('Street Corn');
  });

  it('should conditionally highlight only the Chef’s Pick', () => {
    const chefPicks = fixture.nativeElement.querySelectorAll(
      '.chef-pick'
    );

    expect(chefPicks.length).toBe(1);
    expect(chefPicks[0].textContent).toContain("Chef's Pick");
    expect(
      chefPicks[0].closest('.taco-card')?.textContent
    ).toContain('Classic Carnitas');
  });

  it('should filter tacos when a label button is clicked', () => {
    const buttons: HTMLButtonElement[] = Array.from(
      fixture.nativeElement.querySelectorAll('.filters button')
    );

    const spicyButton = buttons.find(
      button => button.textContent?.trim() === 'Spicy'
    );

    expect(spicyButton).toBeDefined();

    spicyButton!.click();
    fixture.detectChanges();

    let cards = fixture.nativeElement.querySelectorAll('.taco-card');

    expect(cards.length).toBe(1);
    expect(cards[0].textContent).toContain('Spicy Chicken');

    const allButton = buttons.find(
      button => button.textContent?.trim() === 'All Tacos'
    );

    allButton!.click();
    fixture.detectChanges();

    cards = fixture.nativeElement.querySelectorAll('.taco-card');
    expect(cards.length).toBe(4);
  });
});
