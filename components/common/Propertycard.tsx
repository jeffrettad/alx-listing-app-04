import { PropertyProps } from "@/interfaces";

const PropertyCard = ({ property }: { property: PropertyProps }) => (
  <div className="border rounded shadow-md p-4 w-full sm:w-[48%] md:w-[31%] lg:w-[23%] m-2">
    <img src={property.image} alt={property.name} className="w-full h-48 object-cover rounded" />
    <h3 className="text-lg font-bold mt-2">{property.name}</h3>
    <p className="text-gray-600">${property.price}/night</p>
    <p className="text-yellow-500">⭐ {property.rating}</p>
  </div>
);

export default PropertyCard;
