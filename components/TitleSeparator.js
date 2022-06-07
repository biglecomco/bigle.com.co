export default function TitleSeparator({ title, text }) {
  return (
    <>
      <div className="flex flex-col items-center justify-center text-center my-20">
        <h1 className="text-4xl font-bold text-primary">{title}</h1>
        <p className="text-primary font-medium my-2">{text}</p>
      </div>
    </>
  );
}
