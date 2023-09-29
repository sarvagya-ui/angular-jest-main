import { AppComponent } from "./app.component";

describe('AppComponent', () => {
  let fixture: AppComponent;
  beforeEach(() => {
    fixture = new AppComponent();
  })

  it("title check", () => {
    expect(fixture.title).toEqual('angular-jest')
  });

  it("sum check", () => {
    expect(2 + 6).toBe(8);
  })

  it('adding positive numbers is not zero', () => {
    for (let a = 1; a < 10; a++) {
      for (let b = 1; b < 10; b++) {
        expect(a + b).not.toBe(0);
      }
    }
  });

  const shoppingList = [
    'diapers',
    'kleenex',
    'trash bags',
    'paper towels',
    'milk',
    'milk',
  ];

  it('the shopping list has milk on it', () => {
    //expect(shoppingList).toContain('milk');
    expect(new Set(shoppingList)).toContain('milk');
  });
})
