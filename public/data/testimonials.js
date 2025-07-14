/**
 * Testimonials Data
 * 
 * This file contains testimonial data that mimics the structure of Google Reviews API
 * Eventually this will be replaced with actual Google Reviews API calls
 * 
 * Structure matches Google Reviews API format:
 * - author_name, author_url, profile_photo_url
 * - rating, text, time (timestamp)
 * - relative_time_description
 */

export const testimonialsData = {
  // Mimics Google Places API response structure
  result: {
    rating: 4.9,
    user_ratings_total: 187,
    reviews: [
      {
        author_name: "Sarah Martinez",
        author_url: "https://www.google.com/maps/contrib/...",
        profile_photo_url: "https://lh3.googleusercontent.com/...",
        rating: 5,
        relative_time_description: "2 weeks ago",
        text: "Heartland fixed our furnace in the middle of a blizzard – within two hours of calling! Professional, knowledgeable, and fair pricing. We won't call anyone else.",
        time: 1703875200, // Unix timestamp
        location: "Indianapolis, IN"
      },
      {
        author_name: "Mike Rodriguez",
        author_url: "https://www.google.com/maps/contrib/...",
        profile_photo_url: "https://lh3.googleusercontent.com/...",
        rating: 5,
        relative_time_description: "3 weeks ago",
        text: "Outstanding service from start to finish. They installed our new AC system quickly and efficiently, cleaned up everything, and the price was very competitive. True Midwestern hospitality.",
        time: 1703270400,
        location: "Carmel, IN"
      },
      {
        author_name: "Jennifer Lewis",
        author_url: "https://www.google.com/maps/contrib/...",
        profile_photo_url: "https://lh3.googleusercontent.com/...",
        rating: 5,
        relative_time_description: "1 month ago",
        text: "We've been using Heartland for our property management company for 3 years. They're reliable, honest, and always provide excellent service to our tenants. Highly recommend.",
        time: 1702665600,
        location: "Fishers, IN"
      },
      {
        author_name: "Robert Kim",
        author_url: "https://www.google.com/maps/contrib/...",
        profile_photo_url: "https://lh3.googleusercontent.com/...",
        rating: 5,
        relative_time_description: "1 month ago",
        text: "Emergency repair on Sunday morning - they actually answered and had someone here within an hour. The technician was courteous and got our heat working perfectly.",
        time: 1702060800,
        location: "Westfield, IN"
      },
      {
        author_name: "Amanda Thompson",
        author_url: "https://www.google.com/maps/contrib/...",
        profile_photo_url: "https://lh3.googleusercontent.com/...",
        rating: 5,
        relative_time_description: "2 months ago",
        text: "Forrest and his team installed a new HVAC system in our home. The work was completed on time, within budget, and they were incredibly professional. The system runs so much quieter than our old one!",
        time: 1701456000,
        location: "Noblesville, IN"
      },
      {
        author_name: "David Chen",
        author_url: "https://www.google.com/maps/contrib/...",
        profile_photo_url: "https://lh3.googleusercontent.com/...",
        rating: 5,
        relative_time_description: "2 months ago",
        text: "Heartland has been maintaining our office building's HVAC system for 2 years. Always professional, always on time, and they've saved us thousands in energy costs with their recommendations.",
        time: 1700851200,
        location: "Indianapolis, IN"
      },
      {
        author_name: "Lisa Brown",
        author_url: "https://www.google.com/maps/contrib/...",
        profile_photo_url: "https://lh3.googleusercontent.com/...",
        rating: 5,
        relative_time_description: "3 months ago",
        text: "Called them for a second opinion on a costly repair another company quoted. Heartland was honest, fair, and fixed the issue for half the price. They earned a customer for life.",
        time: 1700246400,
        location: "Zionsville, IN"
      },
      {
        author_name: "James Wilson",
        author_url: "https://www.google.com/maps/contrib/...",
        profile_photo_url: "https://lh3.googleusercontent.com/...",
        rating: 5,
        relative_time_description: "3 months ago",
        text: "Excellent air quality assessment and duct cleaning service. The technician explained everything clearly and the results were immediate - we can actually breathe better in our home now!",
        time: 1699641600,
        location: "Avon, IN"
      },
      {
        author_name: "Maria Gonzalez",
        author_url: "https://www.google.com/maps/contrib/...",
        profile_photo_url: "https://lh3.googleusercontent.com/...",
        rating: 5,
        relative_time_description: "4 months ago",
        text: "We had an emergency with our commercial kitchen's ventilation system. Heartland responded immediately and had us back up and running the same day. Saved our business from major losses.",
        time: 1699036800,
        location: "Indianapolis, IN"
      },
      {
        author_name: "Kevin O'Connor",
        author_url: "https://www.google.com/maps/contrib/...",
        profile_photo_url: "https://lh3.googleusercontent.com/...",
        rating: 4,
        relative_time_description: "4 months ago",
        text: "Great service overall. The technician was knowledgeable and fixed our AC quickly. Only minor complaint is scheduling took a bit longer than expected, but the quality of work made up for it.",
        time: 1698432000,
        location: "Plainfield, IN"
      },
      {
        author_name: "Rachel Davis",
        author_url: "https://www.google.com/maps/contrib/...",
        profile_photo_url: "https://lh3.googleusercontent.com/...",
        rating: 5,
        relative_time_description: "5 months ago",
        text: "Heartland installed a smart thermostat system in our home and trained us on how to use it. The energy savings have been incredible - already paid for itself in just a few months!",
        time: 1697827200,
        location: "Carmel, IN"
      },
      {
        author_name: "Thomas Anderson",
        author_url: "https://www.google.com/maps/contrib/...",
        profile_photo_url: "https://lh3.googleusercontent.com/...",
        rating: 5,
        relative_time_description: "5 months ago",
        text: "Outstanding preventive maintenance service. They caught a potential issue before it became a major problem and saved us from what could have been a very expensive repair.",
        time: 1697222400,
        location: "Fishers, IN"
      }
    ]
  }
};

// Helper function to get featured testimonials for carousel
export function getFeaturedTestimonials(count = 4) {
  return testimonialsData.result.reviews.slice(0, count);
}

// Helper function to get testimonials by rating
export function getTestimonialsByRating(rating = 5) {
  return testimonialsData.result.reviews.filter(review => review.rating === rating);
}

// Helper function to get overall rating data
export function getRatingData() {
  return {
    rating: testimonialsData.result.rating,
    total_reviews: testimonialsData.result.user_ratings_total,
    reviews_text: `${testimonialsData.result.user_ratings_total}+ verified reviews`
  };
} 