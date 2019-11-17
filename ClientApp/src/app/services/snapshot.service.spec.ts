import { TestBed } from '@angular/core/testing';

import { SnapshotService } from './snapshot.service';

fdescribe('SnapshotService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  fit('should be created', () => {
    const service: SnapshotService = TestBed.get(SnapshotService);
    expect(service).toBeTruthy();
  });


  fit('get should return data', () => {
    const service: SnapshotService = TestBed.get(SnapshotService);
    expect(service.getRuntimeSettings).toBeTruthy();

    var list = service.getRuntimeSettings();

    expect(list.length).toBe(1);
  });


});
