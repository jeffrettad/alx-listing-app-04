
type Property = {
  id: string;
  title: string;
  description: string;
  location: string;
  price: number;
  imageUrl: string;
};

export default function PropertyDetail({ property }: { property: Property }) {
  return (
    <div className="p-6 max-w-3xl mx-auto">
      <img
        src={property.imageUrl}
        alt={property.title}
        className="w-full h-64 object-cover rounded-lg shadow-md mb-4"
      />
      <h1 className="text-2xl font-bold mb-2">{property.title}</h1>
      <p className="text-gray-600 mb-2">{property.location}</p>
      <p className="text-lg font-semibold text-primary mb-4">${property.price}</p>
      <p className="text-gray-700">{property.description}</p>
    </div>
  );
}
