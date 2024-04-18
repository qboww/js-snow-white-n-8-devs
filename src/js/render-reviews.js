
const renderReview = ({ _id, avatar_url, author, review }) => {
  return `<li class="reviews-list-item swiper-slide" id="${_id}">
            <img class="thumbnail" src="${avatar_url}" alt="${author}" width="48" height="48" loading="lazy">
            <div class="opinion">
              <h3 class="author">${author}</h3>
              <p class="review">${review.trim()}</p>
            </div>
          </li>`;
};

export function renderReviews(reviews) {
  return reviews.map(renderReview).join('');
}
