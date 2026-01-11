fimport Pill from "@/components/common/pill";

const filters = ["Top Villa", "Self Checkin", "Free Parking", "Pet Friendly"];

<div className="p-4 flex flex-wrap">
  {filters.map((filter) => (
    <Pill key={filter} label={filter} />
  ))}
</div>
import { PROPERTYLISTINGSAMPLE } from "@/constants";
import PropertyCard from "@/components/common/PropertyCard";

<div className="flex flex-wrap justify-center p-4">
  {PROPERTYLISTINGSAMPLE.map((property) => (
    <PropertyCard key={property.name} property={property} />
  ))}
</div>
