const SectionTitle = ({ title }: { title: string }) => {
  return (
    <div className="border-b border-gray-200">
      <h2 className="text-2xl uppercase font-medium tracking-wider pb-5">
        {title}
      </h2>
    </div>
  );
};

export default SectionTitle;
