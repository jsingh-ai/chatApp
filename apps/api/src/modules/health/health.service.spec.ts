import { HealthService } from './health.service';

describe('HealthService', () => {
  it('returns ok status', () => {
    const service = new HealthService();
    const status = service.getStatus();
    expect(status.status).toBe('ok');
    expect(status.timestamp).toBeDefined();
  });
});
