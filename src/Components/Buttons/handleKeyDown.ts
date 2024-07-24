const handleKeyDown = (event: { key: string; preventDefault: () => void }) => {
  if (event.key === "Enter" || event.key === " ") {
    event.preventDefault();
  }
};

export default handleKeyDown;
