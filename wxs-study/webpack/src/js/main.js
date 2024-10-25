import "../css/index.less";
import "../css/a.less";

const container = document.querySelector("#box");
container.addEventListener("click", async () => {
  const { count } = await import(
    /* webpackChunkName: "activeImportTest" */ "./count.ts"
  );
  container.style.backgroundColor = "red";
  const result = count(3, 2);
  container.innerHTML = result;
});

export default {};
