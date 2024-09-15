import { MotionValue } from 'framer-motion';
import React, { useState, useEffect } from 'react';

type ArticleSectionProps = {
  isArticlesInView: boolean;
  isMobile: boolean;
  backgroundGradient: MotionValue<string>;
};

interface Article {
  title: string;
  description: string;
  link: string;
  claps: number;
  responses: number;
  date: string;
  pubDate: string;
}

const Articles: React.FC<ArticleSectionProps> = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

  const openModal = (article: Article) => {
    setSelectedArticle(article);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedArticle(null);
  };

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@oguzhancart1');
        const data = await response.json();
        const fetchedArticles = data.items.map((item: Article) => ({
          title: item.title,
          description: item.description.replace(/<[^>]*>?/gm, '').slice(0, 100) + '...',
          link: item.link,
          claps: item.claps || 0,
          responses: item.responses || 0,
          date: new Date(item.pubDate).toLocaleDateString('en-US')
        }));
        setArticles(fetchedArticles);
        setLoading(false);
      } catch (err) {
        setError('An error occurred while loading the articles.');
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  if (loading) return <div className="text-center py-16">Loading...</div>;
  if (error) return <div className="text-center py-16 text-red-500">{error}</div>;

  return (
      <section className="articles-section max-w-6xl mx-auto py-16">
        <h2 className="text-4xl font-bold mb-12 text-center text-gray-800">My Articles</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-3 text-gray-800">{article.title}</h3>
                  <p className="text-gray-600 mb-4">{article.description}</p>
                  <div className="flex justify-between items-center mb-4 text-sm text-gray-500">
                    <span>{article.date}</span>
                  </div>
                  <div className="text-center relative z-10">
                    <button
                        onClick={() => openModal(article)}
                        className="inline-block px-6 py-3 bg-gradient-to-r from-green-400 to-blue-500 text-white rounded-full text-sm font-medium transition-all duration-300 hover:from-green-500 hover:to-blue-600 hover:shadow-md cursor-pointer"
                    >
                      Read Article
                    </button>
                  </div>
                </div>
              </div>
          ))}
        </div>

        {/* Modal */}
        {isModalOpen && selectedArticle && (
            <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
              <div className="bg-white p-6 rounded-lg shadow-lg w-11/12 md:w-3/4 lg:w-1/2 relative">
                {/* Close button in the top-right corner */}
                <button
                    onClick={closeModal}
                    className="absolute top-4 right-4 text-gray-600 hover:text-gray-800"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>

                <h2 className="text-3xl font-bold mb-4">{selectedArticle.title}</h2>
                <p className="mb-4">{selectedArticle.description}</p>
                <a
                    href={selectedArticle.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-6 py-2 bg-blue-500 text-white rounded-full text-sm font-medium transition-all duration-300 hover:bg-blue-600"
                >
                  View Full Article
                </a>
                <button
                    onClick={closeModal}
                    className="ml-4 px-6 py-2 bg-red-500 text-white rounded-full text-sm font-medium transition-all duration-300 hover:bg-red-600"
                >
                  Close
                </button>
              </div>
            </div>
        )}
      </section>
  );
};

export default Articles;
