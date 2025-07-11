function PageHeading({ title }: any) {
  return (
    <>
      <div className="my-10 text-2xl decoration-[var(--button-bg)] underline underline-offset-12">
        {title}
      </div>
    </>
  );
}

export default PageHeading;
