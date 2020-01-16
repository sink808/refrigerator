import { LayoutComponentModule } from './layout-component.module';

describe('LayoutComponentModule', () => {
  let layoutComponentModule: LayoutComponentModule;

  beforeEach(() => {
    layoutComponentModule = new LayoutComponentModule();
  });

  it('should create an instance', () => {
    expect(layoutComponentModule).toBeTruthy();
  });
});
