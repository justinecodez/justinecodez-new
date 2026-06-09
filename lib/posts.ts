export interface Post {
  slug: string;
  title: string;
  description: string;
  date: string; // ISO yyyy-mm-dd
  tags: string[];
  draft?: boolean;
}

export const posts: Post[] = [
  {
    slug: "utc-vs-eat-epoch-boundary-bug",
    title: "Debugging a UTC vs EAT epoch boundary bug in a telecom campaign engine",
    description:
      "A campaign engine misbehaved for exactly three hours a day. The root cause: midnight-boundary date bucketing disagreeing between UTC and UTC+3.",
    date: "2026-06-10",
    tags: ["Kafka", "TypeScript", "timezones", "war story"],
    draft: true,
  },
];

export function getPost(slug: string) {
  return posts.find((p) => p.slug === slug);
}
