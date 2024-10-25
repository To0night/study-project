import { memo } from "react";

function CompA(props) {
  console.log("组件A的render函数执行了");
  return (
    <>
      <div>这是组件A</div>
      <div>{props.children}</div>
    </>
  );
}

export default memo(CompA);
