import { memo, useImperativeHandle, forwardRef } from "react";

function PostItem(props: any, ref: any) {
  console.log(props.p1.ref);
  useImperativeHandle(ref, () => ({
    name: "wxs",
  }));

  const move2postItem = () => {
    // console.log(props)
    props.move2post(props.index + 1);
  };

  return (
    <>
      <li onClick={move2postItem}>{props.title}</li>
    </>
  );
}

export default memo(forwardRef(PostItem));
