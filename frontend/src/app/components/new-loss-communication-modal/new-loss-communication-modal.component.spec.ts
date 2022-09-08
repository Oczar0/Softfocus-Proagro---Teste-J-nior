import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewLossCommunicationModalComponent } from './new-loss-communication-modal.component';

describe('NewLossCommunicationModalComponent', () => {
  let component: NewLossCommunicationModalComponent;
  let fixture: ComponentFixture<NewLossCommunicationModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewLossCommunicationModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewLossCommunicationModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
