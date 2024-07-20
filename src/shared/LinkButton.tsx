import { ReactNode } from "react";
import { Link } from "react-router-dom";

export function LinkButton(props: { children: ReactNode; linkTo: string }) {
  return <Link to={props.linkTo}>{props.children}</Link>;
}
