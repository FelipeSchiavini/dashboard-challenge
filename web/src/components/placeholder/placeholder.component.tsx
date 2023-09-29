interface PlaceholderProps {
  title: string;
  description: string;
}

export const Placeholder: React.FC<PlaceholderProps> = ({title, description}) => {
  return (
    <div className="hero pt-8">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">{title}</h1>
          <p className="py-6">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};
