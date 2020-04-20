import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetAccountViewComponent } from './asset-account-view.component';

describe('AssetAccountViewComponent', () => {
  let component: AssetAccountViewComponent;
  let fixture: ComponentFixture<AssetAccountViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssetAccountViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssetAccountViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
