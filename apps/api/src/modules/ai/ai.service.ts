import { Injectable } from '@nestjs/common';

@Injectable()
export class AiService {
  getPlannedFeatures() {
    return {
      summaries: 'Summaries will aggregate channel activity over time.',
      reports: 'Reports will provide org leaders actionable insights.',
      status: 'not_implemented',
    };
  }
}
