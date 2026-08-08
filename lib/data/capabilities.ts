import { CapabilityGroup } from '@/types';

export const capabilities: CapabilityGroup[] = [
  {
    label: 'Problem definition',
    description:
      'Time spent on mathematics proofs shows up here: sitting with what a problem actually is before deciding what to build. On Jirani, that meant modelling two different resource types honestly instead of reaching for one generic listing schema.',
  },
  {
    label: 'Full-stack implementation',
    description:
      'Interfaces, APIs, databases, authentication, payments, deployment \u2014 end to end, not just the parts that render nicely. The foundation site carries content, donations, and communication as one working system, not a static front with a form bolted on.',
  },
  {
    label: 'Honest scope',
    description:
      'Distinguishing what was built alone from what was built with a team, and what\u2019s live from what\u2019s still in progress. That distinction is on every project page here rather than smoothed over.',
  },
];
