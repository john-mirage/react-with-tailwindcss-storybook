const Button = ({ ...props }) => {
  return (
    <button className="rounded-full bg-violet px-24 py-8 text-white" {...props}>
      This is a button
    </button>
  );
};

export default Button;
