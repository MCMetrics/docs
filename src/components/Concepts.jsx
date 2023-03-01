import {Button} from '@/components/Button'
import {Heading} from '@/components/Heading'

// - User Activity
// - User Acquisition
// - User Retention
// - User Sessions
// - Revenue Analytics
// - Ad Campaigns
// - Experiments

const concepts = [
    {
        href: '/activity',
        name: 'User Activity',
        description: 'Learn about the user activity model and how to' +
            ' understand metrics like playercount, DAU, WAU, and MAU.'
    },
    {
        href: '/acquisition',
        name: 'User Acquisition',
        description: 'Learn about the user acquisition model and how to' +
            ' understand metrics like unique joins.'
    },
    {
        href: '/retention',
        name: 'User Retention',
        description: 'Learn about the user retention model and how to' +
            ' understand metrics like retention rate, bounce rate, and the' +
            ' daily retention curve.'
    },
    {
        href: '/sessions',
        name: 'User Sessions',
        description: 'Learn about the user session model and how to' +
            ' understand metrics like session length, session count,' +
            ' P25/P50/P75 session length'
    },
    {
        href: '/revenue',
        name: 'Revenue Analytics',
        description: 'Learn how to read metrics like revenue, conversion rate' +
            ' repeat purchase rate, time-to-purchase, ARPU, ARPPU, and' +
            ' revenue funnels.'
    },
    {
        href: '/campaigns',
        name: 'Ad Campaigns',
        description: 'Learn about ad campaigns, how to set them up, and how' +
            ' to read metrics like ad spend, ad revenue, UAC, CAC, and ROI.'
    },
    {
        href: '/experiments',
        name: 'Experiments',
        description: 'Learn about setting up and analyzing experiments,' +
            ' including experiment triggers, variants, probabilities, and' +
            ' action types. Also learn how to read experiment result' +
            ' metrics, including retention, revenue, and ARPU.'
    }
]

export function Concepts() {
    return (
        <div className="my-16 xl:max-w-none">
            <Heading level={2} id="concepts">
                Concepts
            </Heading>
            <div
                className="not-prose mt-4 grid grid-cols-1 gap-8 border-t border-zinc-900/5 pt-10 dark:border-white/5 sm:grid-cols-2 xl:grid-cols-4">
                {concepts.map((concept) => (
                    <div key={concept.href}>
                        <h3 className="text-sm font-semibold text-zinc-900 dark:text-white">
                            {concept.name}
                        </h3>
                        <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                            {concept.description}
                        </p>
                        <p className="mt-4">
                            <Button href={concept.href} variant="text"
                                    arrow="right">
                                Read more
                            </Button>
                        </p>
                    </div>
                ))}
            </div>
        </div>
    )
}
