import * as React from "react";
import * as classnames from "classnames";

export interface ButtonProps {
  link?: boolean;
  primary?: boolean;
  secondary?: boolean;
  tertiary?: boolean;
  loading?: boolean;
  disabled?: boolean;
  type?: string;
  className?: string;
  children?: any;
  [key: string]: any;
}

export default class btn extends React.Component<ButtonProps, any> {
  render() {
    const {
      link,
      primary,
      secondary,
      tertiary,
      loading,
      disabled,
      type,
      className,
      children,
      ...otherProps,
     } = this.props;
    const classes = classnames("btn", {
      "btn-default": !link || !primary || !secondary || !tertiary,
      "btn-link": link,
      "btn-primary": primary,
      "btn-secondary": secondary,
      "btn-tertiary": tertiary,
      "is-loading": loading,
      "disabled": disabled,
    }, className);
    return (
      <button type={type || "button"} className={classes} {...otherProps}>{children}</button>
    );
  }
}
