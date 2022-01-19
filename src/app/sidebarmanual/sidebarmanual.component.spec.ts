import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarmanualComponent } from './sidebarmanual.component';

describe('SidebarmanualComponent', () => {
  let component: SidebarmanualComponent;
  let fixture: ComponentFixture<SidebarmanualComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidebarmanualComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarmanualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
