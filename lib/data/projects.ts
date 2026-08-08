import { Project } from '@/types';

export const projects: Project[] = [
  {
    slug: 'mwenda-kimathi-foundation',
    title: 'Mwenda Kimathi Foundation',
    oneLiner:
      'A digital home for a community organisation in Meru, built for content, donations, and discoverability — not a brochure site.',
    role: 'Founder & Developer',
    status: 'Live',
    year: '2025',
    featured: true,
    focus: 'Product · CMS · Payments',

    context:
      'The foundation runs sport, conservation, and culture programmes as three connected pillars of community development, not three separate initiatives. The site had to hold that structure without flattening it into generic "our programmes" copy.',
    problem:
      'The organisation needed a real platform: news that staff could publish without a developer, a donation flow that actually works with Kenyan payment rails, and programme pages that read as permanent structure rather than instances someone could accidentally delete.',
    constraints:
      'Stripe and M-Pesa Daraja were both ruled out over eligibility issues partway through the build, which meant re-deciding the payments approach mid-project rather than at the start.',
    approach:
      'Split the site into what changes often (news, updates — CMS-managed) and what doesn\u2019t (the three programme pillars — hardcoded, since they\u2019re structural categories, not content instances).',
    decision: {
      label: 'Reverting the Programmes page from CMS to hardcoded content',
      description:
        'Programmes were initially modelled in Sanity like any other content type. Partway through, it became clear that sport, conservation, and culture aren\u2019t things that get added or removed — they\u2019re the permanent shape of the organisation. Modelling them as CMS entries invited accidental deletion or duplication for no real flexibility benefit, so they were moved back to hardcoded structure and only their content (not their existence) stayed editable.',
    },
    implementation:
      'Next.js 15 with Sanity CMS for news and dynamic content, Paystack for donations after Stripe and M-Pesa became unavailable, and Resend for transactional email. Editorial review happened through GitHub pull requests rather than direct pushes, once the payments rework made a review step worth having.',
    difficult:
      'Rewriting the payments integration after the build was already underway, without a working donations flow in the interim.',
    learned:
      'Not every piece of "content" belongs in a CMS. Treating structural categories the same as editorial content adds flexibility nobody asked for and risk nobody wanted.',

    stack: ['Next.js 15', 'TypeScript', 'Sanity CMS', 'CSS Modules', 'Paystack', 'Resend', 'Vercel'],
    links: [
      { label: 'View live', url: 'https://savanna-rising-foundation.vercel.app' },
      { label: 'Source', url: 'https://github.com/mr-shelby-45/Savanna-Rising-Foundation' },
    ],
  },
  {
    slug: 'jirani',
    title: 'Jirani',
    oneLiner:
      'A community trust marketplace exploring how physical items and human services can share one backend without becoming two unrelated products.',
    role: 'Founder & Developer',
    status: 'In development',
    year: '2025',
    featured: true,
    focus: 'Product architecture · Trust systems',

    context:
      'Jirani started with a simple question: how do you represent borrowing, services, availability, trust, and payments without splitting the product into two systems that happen to share a login page?',
    problem:
      'Lending a drill and booking a neighbour\u2019s tutoring time are not the same kind of transaction — different availability models, different trust signals, different completion criteria — but the product needed to feel like one coherent marketplace, not two bolted together.',
    approach:
      'Model items and services as two distinct resource identities sharing one backend, rather than one generic "listing" type stretched to cover both. This was the piece of the system that drove most of the other design decisions.',
    decision: {
      label: 'One backend, two resource identities — not one generic listing model',
      description:
        'A single flexible "listing" schema would have been faster to build initially, but it would have forced services (which need scheduling and completion tracking) and items (which need availability and return tracking) into the same shape, weakening both. Keeping them as distinct identities on a shared backend meant more upfront modelling work in exchange for each resource type actually fitting its own transaction logic.',
    },
    implementation:
      'Next.js and TypeScript, with the item/service distinction carried through the data model rather than handled only in the UI layer.',
    learned:
      'The system-design decision this project is built around \u2014 keeping distinct concepts distinct even when it\u2019s more work \u2014 is the reason it\u2019s an early-stage project worth explaining in detail rather than a finished one worth listing quickly.',

    stack: ['Next.js', 'TypeScript'],
    links: [],
  },
  {
    slug: 'egeshasmart',
    title: 'EGESHASMART',
    oneLiner:
      'A five-person final-year project building a computer-vision parking system — vehicle detection, occupancy tracking, and payment, as a team.',
    role: 'Team Member',
    status: 'Academic project',
    year: '2024',
    featured: true,
    focus: 'Computer vision · Systems integration',

    context:
      'JKUAT final-year group project: a smart parking system that had to detect vehicle occupancy from camera input and connect that to a working payment flow, not just a working model in a notebook.',
    problem:
      'Detecting whether a parking spot is occupied is a solved computer-vision problem in isolation; making that detection reliable enough to drive real payment and access decisions, and getting five people\u2019s components to work together as one system, is the actual difficulty.',
    approach:
      'Used a pre-trained YOLOv8 model for vehicle detection rather than training from scratch, given the absence of primary survey data and the project timeline \u2014 and defended that choice explicitly in the project documentation rather than treating it as a shortcut to gloss over.',
    decision: {
      label: 'Defending the use of a pre-trained model instead of training from scratch',
      description:
        'Without primary survey data or the time to build a properly labelled local dataset, training a custom detection model would have produced something worse than a well-chosen pre-trained one. The team framed this as a deliberate engineering trade-off in the project documentation \u2014 correct tool for the constraints, not an unfinished corner.',
    },
    implementation:
      'YOLOv8 for detection, Firebase and PostgreSQL for backend state, Stripe and M-Pesa integration for payment \u2014 built and presented as a team, with a full set of project documentation and a final defence.',
    learned:
      'Working inside a five-person team on a system with real integration points (detection \u2192 backend \u2192 payment) is a different skill from building something solo, and worth stating plainly rather than folding into a first-person "I built" narrative it doesn\u2019t deserve.',

    stack: ['YOLOv8', 'Firebase', 'PostgreSQL', 'Stripe', 'M-Pesa'],
    links: [],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured);
}
