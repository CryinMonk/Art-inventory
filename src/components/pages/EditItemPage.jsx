import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import ItemFormView from '../views/ItemFormView.jsx';

function EditItemPage() {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    axios.get(`http://localhost:5000/api/items/${id}`)
      .then(response => setItem(response.data))
      .catch(err => setError('Failed to fetch item'));
  }, [id]);

  if (error) {
    return (
      <div className="container mx-auto px-6 py-8">
        <div className="max-w-md mx-auto text-center">
          <div className="card-modern p-8 border-l-4 border-red-500 bg-red-50">
            <div className="flex items-center space-x-3 mb-4">
              <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div>
                <h3 className="text-lg font-semibold text-red-800">Error Loading Product</h3>
                <p className="text-red-600">{error}</p>
              </div>
            </div>
            <Link
              to="/items"
              className="inline-flex items-center space-x-2 px-4 py-2 bg-red-100 text-red-700 rounded-lg hover:bg-red-200 transition-colors duration-300"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              <span>Back to Products</span>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  if (!item) {
    return (
      <div className="container mx-auto px-6 py-8">
        <div className="text-center py-20">
          <div className="inline-flex items-center space-x-3">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white"></div>
            <span className="text-white text-lg">Loading product details...</span>
          </div>
        </div>
      </div>
    );
  }

  return <ItemFormView item={item} isEdit={true} />;
}

export default EditItemPage;