// components/property/ReviewSection.tsx
import axios from "axios";
import { useState, useEffect } from "react";

type Review = {
  id: string;
  comment: string;
  rating: number;
  reviewer: string;
  date: string; // Or Date if it's parsed
};

const ReviewSection = ({ propertyId }: { propertyId: string }) => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchReviews = async () => {
      if (!propertyId) return;
      try {
        const response = await axios.get(/api/properties/${propertyId}/reviews);
        setReviews(response.data);
      } catch (error) {
        console.error("Error fetching reviews:", error);
        setError("Failed to load reviews.");
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, [propertyId]);

  if (loading) return <p className="text-center">Loading reviews...</p>;
  if (error) return <p className="text-red-500 text-center">{error}</p>;
  if (reviews.length === 0) return <p className="text-gray-500 text-center">No reviews yet.</p>;

  return (
    <div className="mt-6 space-y-4">
      <h3 className="text-xl font-semibold mb-2">Reviews</h3>
      {reviews.map((review) => (
        <div key={review.id} className="border p-4 rounded shadow-sm bg-white">
          <p className="text-gray-800 mb-1 italic">"{review.comment}"</p>
          <div className="text-sm text-gray-600 flex justify-between">
            <span>⭐ {review.rating} / 5</span>
            <span>By {review.reviewer} on {new Date(review.date).toLocaleDateString()}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ReviewSection;
