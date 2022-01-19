import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionmanualComponent } from './sectionmanual.component';

describe('SectionmanualComponent', () => {
  let component: SectionmanualComponent;
  let fixture: ComponentFixture<SectionmanualComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionmanualComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionmanualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
