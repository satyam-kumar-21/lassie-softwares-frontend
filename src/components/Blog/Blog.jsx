import React from 'react';

const posts = [
  {
    id: 1,
    title: 'The Importance of User-Centric Design in Digital Marketing',
    href: '#',
    description:
      'Discover why user-centric design is crucial for effective digital marketing strategies, and how it can significantly boost your conversion rates and customer engagement.',
    date: 'Jul 18, 2024',
    datetime: '2024-07-18',
    category: { title: 'Digital Marketing', href: '#' },
    author: {
      name: 'Emily Green',
      role: 'Digital Marketing Specialist',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1588200902416-3a004dbbd273?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  {
    id: 2,
    title: 'Effective Strategies for Building a Strong Online Presence',
    href: '#',
    description:
      'Learn actionable strategies and tips for establishing a strong online presence for your business, enhancing brand visibility, and attracting more customers.',
    date: 'Jul 16, 2024',
    datetime: '2024-07-16',
    category: { title: 'Business Growth', href: '#' },
    author: {
      name: 'John Doe',
      role: 'Business Consultant',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1525966222131-b56a2e86152e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  {
    id: 3,
    title: 'Best Practices for SEO Optimization in 2024',
    href: '#',
    description:
      'Explore the latest SEO trends and best practices to optimize your website for search engines in 2024, ensuring higher rankings and increased organic traffic.',
    date: 'Jul 14, 2024',
    datetime: '2024-07-14',
    category: { title: 'SEO', href: '#' },
    author: {
      name: 'Jane Smith',
      role: 'SEO Specialist',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1546776312-f3e49627e0e7?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
];

const Blog = () => {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">From the blog</h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Learn how to grow your business with our expert advice.
          </p>
        </div>
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => (
            <article key={post.id} className="flex max-w-xl flex-col items-start justify-between">
              <div className="flex items-center gap-x-4 text-xs">
                <time dateTime={post.datetime} className="text-gray-500">
                  {post.date}
                </time>
                <a
                  href={post.category.href}
                  className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                >
                  {post.category.title}
                </a>
              </div>
              <div className="group relative">
                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                  <a href={post.href}>
                    <span className="absolute inset-0" />
                    {post.title}
                  </a>
                </h3>
                <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{post.description}</p>
              </div>
              <div className="relative mt-8 flex items-center gap-x-4">
                <img src={post.author.imageUrl} alt="" className="h-10 w-10 rounded-full bg-gray-50" />
                <div className="text-sm leading-6">
                  <p className="font-semibold text-gray-900">
                    <a href={post.author.href}>
                      <span className="absolute inset-0" />
                      {post.author.name}
                    </a>
                  </p>
                  <p className="text-gray-600">{post.author.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
