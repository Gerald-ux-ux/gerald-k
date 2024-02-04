type ButtonProps = {
  label: string;
  action: string;
};

export default function Button({ label, action }: ButtonProps) {
  return (
    <button className="w-full rounded-lg bg-secondary p-3 text-primary  hover:text-secondary  hover:bg-tertiary">
      {label}
    </button>
  );
}
