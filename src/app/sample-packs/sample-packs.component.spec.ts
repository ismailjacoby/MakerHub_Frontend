import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SamplePacksComponent } from './sample-packs.component';

describe('SamplePacksComponent', () => {
  let component: SamplePacksComponent;
  let fixture: ComponentFixture<SamplePacksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SamplePacksComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SamplePacksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
