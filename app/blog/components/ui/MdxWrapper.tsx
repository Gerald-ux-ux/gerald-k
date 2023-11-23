import { useMDXComponent } from "next-contentlayer/hooks";
import Link from "next/link";

interface CustomLinkProps
  extends React.DetailedHTMLProps<
    React.AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  > {}

const CustomLink: React.FC<CustomLinkProps> = (props) => {
  const href = props?.href;
  const isInternalLink = href && (href.startsWith("/") || href.startsWith("#"));
  if (isInternalLink) {
    return (
      // {...props} should be in the link
      <Link href={href} className="underline">
        {props.children}
      </Link>
    );
  }

  return (
    <a
      target="_blank"
      //   href={href}
      rel="noopener noreferrer"
      className="font-normal text-link underline underline-offset-4"
    ></a>
  );
};

const components = {
  //   Image: CustomImage,
  a: CustomLink,
  Link: CustomLink,
  //   Alert: Alert,
  //   Parallax: Parallax,
  //   Weather: Weather,
  //   WeatherList: WeatherList,
  //   LinkPreview: LinkPreview,
};

export default function MdxWrapper({ code }: { code: string }) {
  const Component = useMDXComponent(code, { components });

  return <Component components={components} />;
}
