import Link from "next/link";
import slugify from "slugify";

type TagsProps = {
  tags: string[];
};

const Tags = ({ tags }: TagsProps) => {
  if (!tags?.length) {
    return null;
  }

  return (
    <ul className="flex flex-col gap-6">
      <h2>Tags</h2>
      <div className="animated-list flex flex-wrap gap-3">
        {tags.map((tag) => (
          <li key={tag} className="transition-opacity">
            <Link
              href={`/blog/tag/${slugify(tag, { lower: true })}`}
              className="whitespace-nowrap rounded-lg bg-secondary px-4 py-2 text-sm text-primary "
            >
              {tag}
            </Link>
          </li>
        ))}
      </div>
    </ul>
  );
};

export default Tags;
