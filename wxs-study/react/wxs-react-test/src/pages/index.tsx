import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <a href="./about">去about页面</a>
      <a href="./test/testPage" style={{ marginLeft: "10px" }}>
        去测试页面
      </a>
      <a href="./xRedux" style={{ marginLeft: "10px" }}>
        redux测试
      </a>
      <a href="./fiber" style={{ marginLeft: "10px" }}>
        fiber 测试
      </a>
    </>
  );
}
