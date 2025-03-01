export default function GenerateImageButton({ disabled }) {
  return (
    <button
      type="submit"
      className={`w-full bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 px-6 rounded-xl transform hover:scale-105 transition-transform duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-yellow-300 ${
        disabled ? 'opacity-50 cursor-not-allowed' : ''
      }`}
      style={{ boxShadow: "8px 8px 0px #ff69b4" }}
      disabled={disabled}
    >
      {disabled ? '🔄 Generating...' : '🚀 Generate Image'}
    </button>
  );
}
