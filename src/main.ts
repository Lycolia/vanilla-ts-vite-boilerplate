import './style.css';

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const title = document.querySelector<HTMLDivElement>('#title')!;
// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const content = document.querySelector<HTMLDivElement>('#content')!;

content.innerHTML = `
  <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
`;

title.onclick = () => {
  alert('Hello TS-Vite!!');
};
