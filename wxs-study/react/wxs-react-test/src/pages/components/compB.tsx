import { useContext, useImperativeHandle, forwardRef } from "react";

function compB(props, ref) {
  useImperativeHandle(ref, () => {
    return {
      nameA: "wxs",
    };
  });

  return (
    <>
      <div>这是组件B</div>
      <div>{props.children}</div>
    </>
  );
}

export default forwardRef(compB);
