import { JSXElementConstructor, ReactElement } from "react";

export default function Container(props: {
  children:
    | ReactElement<any, string | JSXElementConstructor<any>>
    | null
    | undefined;
}) {
  return <div className="max-w-7xl mx-auto">{props.children}</div>;
}
