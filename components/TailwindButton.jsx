function TailWindButton({ children }) {
  return (
    <button class="bg-purple-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
      {children}
    </button>
  );
}

export default TailWindButton;
