/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { PropsWithChildren } from "react";

export const LinkResolver = ({
  children,
  href,
  title,
  target,
  rel,
  className,
}: PropsWithChildren<{
  href?: string | undefined;
  title?: string | undefined;
  target?: string | undefined;
  rel?: string | undefined;
  className?: string | undefined;
}>) => {
  if (href?.match(/^http/)) {
    return (
      <a
        href={href}
        className={className || ""}
        rel={rel || "noreferrer noopener nofollow"}
        target={target || "_blank"}
      >
        {children || title}
      </a>
    );
  } else {
    return (
      <Link
        href={
          /^\/.+/.test(href || "") === false && href !== "/"
            ? (href = `/${href}`)
            : href || ""
        }
        passHref={children ? true : false}
      >
        <a className={className || ""} target={target || ""}>
          {children || title}
        </a>
      </Link>
    );
  }
};
