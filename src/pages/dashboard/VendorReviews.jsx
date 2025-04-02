import React, { useState } from "react";
import { Star, User, Calendar, Filter, MessageSquare } from "lucide-react";

const VendorReviews = () => {
  // Sample reviews data
  const allReviews = [
    {
      id: 1,
      customerName: "Sarah Johnson",
      date: "2025-03-20",
      rating: 5,
      comment:
        "Absolutely loved the food! The flavors were amazing and delivery was quick.",
    },
    {
      id: 2,
      customerName: "Michael Chen",
      date: "2025-03-18",
      rating: 4,
      comment:
        "Great food and service. Would order again, but the packaging could be improved.",
    },
    {
      id: 3,
      customerName: "Jessica Williams",
      date: "2025-03-15",
      rating: 5,
      comment:
        "The best pasta I've had in a long time! Everything was perfect.",
    },
    {
      id: 4,
      customerName: "David Rodriguez",
      date: "2025-03-12",
      rating: 2,
      comment: "Food was cold on arrival and took much longer than expected.",
    },
    {
      id: 5,
      customerName: "Emily Thompson",
      date: "2025-03-10",
      rating: 3,
      comment: "Decent food but nothing special. Delivery was on time though.",
    },
    {
      id: 6,
      customerName: "James Wilson",
      date: "2025-03-08",
      rating: 1,
      comment:
        "Very disappointed. Order was completely wrong and customer service was unhelpful.",
    },
    {
      id: 7,
      customerName: "Lisa Brown",
      date: "2025-03-05",
      rating: 5,
      comment:
        "Outstanding quality! Will definitely be ordering from here regularly.",
    },
    {
      id: 8,
      customerName: "Robert Taylor",
      date: "2025-03-03",
      rating: 4,
      comment:
        "Good food, reasonable prices, and friendly delivery. Minor delay but they notified me.",
    },
    {
      id: 9,
      customerName: "Sophia Martinez",
      date: "2025-03-01",
      rating: 2,
      comment: "Food quality has gone downhill lately. Used to be much better.",
    },
    {
      id: 10,
      customerName: "Daniel Lee",
      date: "2025-02-28",
      rating: 5,
      comment:
        "Exceptional food and service as always! Their attention to detail is impressive.",
    },
  ];

  // State for currently selected rating filter
  const [selectedRating, setSelectedRating] = useState(0); // 0 means show all

  // Filter reviews based on selected rating
  const filteredReviews =
    selectedRating === 0
      ? allReviews
      : allReviews.filter((review) => review.rating === selectedRating);

  // Calculate review statistics
  const stats = {
    total: allReviews.length,
    average: (
      allReviews.reduce((sum, review) => sum + review.rating, 0) /
      allReviews.length
    ).toFixed(1),
    counts: [1, 2, 3, 4, 5].map((rating) => ({
      rating,
      count: allReviews.filter((review) => review.rating === rating).length,
    })),
  };

  // Format date to be more readable
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  // Render stars for a given rating
  const renderStars = (rating) => {
    return Array(5)
      .fill(0)
      .map((_, i) => (
        <Star
          key={i}
          size={16}
          className={
            i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
          }
        />
      ));
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 bg-red-50">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-800 mb-2">
            Customer Reviews
          </h1>
          <div className="flex items-center">
            <div className="flex mr-2">
              {renderStars(Math.round(stats.average))}
            </div>
            <span className="font-semibold text-lg">{stats.average}</span>
            <span className="text-gray-500 ml-2">({stats.total} reviews)</span>
          </div>
        </div>
      </div>

      {/* Rating filter buttons */}
      <div className="flex flex-wrap gap-2 mb-8">
        <button
          onClick={() => setSelectedRating(0)}
          className={`px-4 py-2 rounded-lg flex items-center ${
            selectedRating === 0
              ? "bg-red-600 text-white"
              : "bg-white text-gray-700 hover:bg-red-200"
          }`}
        >
          <MessageSquare size={16} className="mr-2" />
          All Reviews
        </button>

        {stats.counts.map(({ rating, count }) => (
          <button
            key={rating}
            onClick={() => setSelectedRating(rating)}
            className={`px-4 py-2 rounded-lg flex items-center ${
              selectedRating === rating
              ? "bg-red-600 text-white"
              : "bg-white text-gray-700 hover:bg-red-200"
            }`}
          >
            <span className="flex mr-1">{renderStars(rating)}</span>
            <span className="ml-1">({count})</span>
          </button>
        ))}
      </div>

      {/* Reviews list */}
      <div className="space-y-6">
        {filteredReviews.length === 0 ? (
          <div className="text-center py-12 bg-gray-50 rounded-lg">
            <p className="text-gray-500">No reviews with this rating yet.</p>
          </div>
        ) : (
          filteredReviews.map((review) => (
            <div
              key={review.id}
              className="bg-white p-6 rounded-lg shadow-sm border border-gray-100"
            >
              <div className="flex justify-between items-start">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-500">
                    <User size={20} />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-medium text-gray-800">
                      {review.customerName}
                    </h3>
                    <div className="flex items-center text-sm text-gray-500 mt-1">
                      <Calendar size={14} className="mr-1" />
                      <span>{formatDate(review.date)}</span>
                    </div>
                  </div>
                </div>
                <div className="flex">{renderStars(review.rating)}</div>
              </div>
              <p className="mt-4 text-gray-600">{review.comment}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default VendorReviews;
