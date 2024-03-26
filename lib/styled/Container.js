import { cn } from "../utils";

/**
 * @param {import("react").HtmlHTMLAttributes<HTMLDivElement>} props
 */
export default function Container(props) {
  return (
    <div
      {...props}
      className={cn(
        "w-full max-w-[1440px]",
        "mx-auto",
        "px-8 max-sm:px-5",
        props.className,
      )}
    />
  );
}

/**
 * @type {typeof Container}
 */
export function MainContainer({ className = "", ...restProps }) {
  return (
    <Container className={cn("py-20 max-sm:py-10", className)} {...restProps} />
  );
}
