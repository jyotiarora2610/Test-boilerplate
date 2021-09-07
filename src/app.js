export function SomeComponent(postsData) {
  const testText = "Hello World";
  const someData = postsData
    ? postsData
        .map((data) => {
          return `<li>${data.title}</li>`;
        })
        .join("")
    : "empty";

  return `
    <div>
      ${testText}
      <ul>
        ${someData}
      </ul>
    </div>
  `;
}
