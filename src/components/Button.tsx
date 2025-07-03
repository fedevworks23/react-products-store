function Button({ text }: any) {
  return (
    <div className="flex justify-center items-center bg-[var(--button-bg)] hover:bg-[var(--hover-button-bg)] px-12 py-4 rounded-[4px] w-full h-full text-[var(--button-text)] text-1xl text-center cursor-pointer">
      {text}
    </div>
  );
}

export default Button;
