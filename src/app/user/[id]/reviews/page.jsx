import Link from 'next/link';

export default function ReviewsPage({ params }) {
  const { id: userId } = params;

  const reviews = [
    { id: '10', title: 'Great product' },
    { id: '11', title: 'Not bad' },
  ];

  return (
    <div>
      <h1>Reviews for User {userId}</h1>
      <ul>
        {reviews.map((review) => (
          <li key={review.id}>
            <Link href={`/user/${userId}/reviews/${review.id}`}>{review.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
