function Button({ text }: any) {
  return (
    <div className="bg-[var(--button-bg)] hover:bg-[var(--hover-button-bg)] px-12 py-4 rounded-[4px] text-[var(--button-text)] text-1xl cursor-pointer">
      {text}
    </div>
  );
}

export default Button;
