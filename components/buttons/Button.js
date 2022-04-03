function Button({ onClick, title, disabled = false, children }) {
  return (
    <button
      className='bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'
      type='button'
      onClick={onClick}
      disabled={disabled}
    >
      <div>{children}</div>
      {title}
    </button>
  );
}

export default Button;
