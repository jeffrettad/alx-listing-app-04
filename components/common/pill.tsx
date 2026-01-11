const Pill = ({ label }: { label: string }) => (
  <span className="px-4 py-1 bg-blue-100 text-blue-800 rounded-full text-sm mr-2 mb-2 inline-block cursor-pointer hover:bg-blue-200">
    {label}
  </span>
);

export default Pill;
