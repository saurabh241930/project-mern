import React from "react";

export default function PassPropsToNormalComponents({ children, ...props }) {
  const childrenWithProps = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, { ...child.props, ...props });
    }
    return child;
  });

  return <>{childrenWithProps}</>;
}